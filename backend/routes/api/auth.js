const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const User = require('../../model/User');
const passport = require('passport');
// const Note = require('../../model/Notes');
require('dotenv/config');

// Регистрация

router.post('/register', (req, res) => {
    let {
        name,
        email,
        password,
        confirm_password
    } = req.body;
    if (password !== confirm_password) {
        return res.status(400).json({
            msg: 'Пароли не совпадают',
            success: false
        })
    } else {
        User.findOne({
            email: email
        }).then(user => {
            if (user) {
                return res.status(400).json({
                    msg: 'Такой пользователь уже существует',
                    success: false
                })
            } else {
                let newUser = new User({
                    name,
                    email,
                    password,
                });
                bycrypt.genSalt(10, (err, salt) => {
                    bycrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                return res.status(201).json({
                                    msg: 'Поздравлю с регистрацией',
                                    success: true,
                                });
                            });
                    });
                });
            }
        })
    }
});

// Вход в кабинет

router.post('/login', (req, res) => {
    User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (!user) {
                res.status(404).json({
                    msg: 'Пользователь с таким email не найден',
                    success: false
                })
            }
            bycrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    // Необходимо создать токен для пользователя
                    if (isMatch) {
                        const payload = {
                            _id: user.id,
                            email: user.email,
                            name: user.name
                        }
                        jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 604800
                        }, (err, token) => {
                            res.status(200).json({
                                success: true,
                                user: user,
                                token: `Bearer ${token}`,
                                msg: 'Добро пожаловать!'
                            })
                        })
                    } else {
                        return res.status(404).json({
                            msg: 'Неверные данные',
                            success: false
                        })
                    }
                })
        })
});

// router.post('/todo', async (req, res) => {
//     let {
//         email,
//         title,
//         description
//     } = req.body
//     Note.findOne({
//         email: email
//     }).then(note => {
//         let newNote = new Note({
//             email,
//             title,
//             description
//         })
//         newNote.save()
//             .then(note => {
//                 return res.status(201).json({
//                     msg: 'Заметка создана',
//                     success: true,
//                 });
//             });
//     })
// })

router.post('/todo', async (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        let newNote = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            backC: req.body.backC
        };
        user.notes.push(newNote);
        user.save()
    })
})

router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    })
});

router.put('/todos', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        userNotes = user.notes
        // let upUserNotes = userNotes.filter(note => note.id !== 1599215760634);
        let upUserNotes = userNotes.filter(note => note.id !== req.body.id);
        user.notes = upUserNotes;
        user.save().then(() => {
            res.status(200).json({
                user: user
            })
        })
    })
})

// router.get('/todos', (req, res) => {
//     Note.find().then(note => {
//         res.status(200).json({
//             note: note,
//         })
//     })
// })

module.exports = router;