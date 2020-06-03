import express from 'express';

const routes = express.Router();

const users = [
    'Natal',
    'O de Dezembro'
];

routes.get('/', (req, res) => {
    return res.json({message:  'Hello Estranho!'});   
});

routes.get('/users', (req, res) => {
    const search = String(req.query.search);

    const searchedUsers = search ? users.filter(user => user.includes(search)) : users;

    return res.json(searchedUsers);   
});

routes.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const user = users[id];

    return res.json(user);
})

routes.post('/users', (req, res) => {
    const user = {
        name: 'Natal',
        email: 'natal@gmail.com'
    };

    return res.json(user);
});

export default routes;