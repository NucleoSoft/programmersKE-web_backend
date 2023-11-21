const express = require('express');

const router = express.Router();

router.get('/', (req: any, res: { json: (arg0: { message: string; }) => void; }) => {
    res.json({ message: 'Programming Languages' });
});

router.get('/:id', (req: { params: { id: any; }; }, res: { json: (arg0: { message: string; }) => void; }) => {
    res.json({ message: `Language ${req.params.id}` });
});

router.post('/', (req: any, res: { json: (arg0: { message: string; }) => void; }) => {
    res.json({ message: 'Language created' });
});

router.delete('/:id', (req: any, res: { json: (arg0: { message: string; }) => void; }) => {
    res.json({ message: 'Language deleted' });
});

router.patch('/:id', (req: any, res: { json: (arg0: { message: string; }) => void; }) => {
    res.json({ message: 'Language updated' });
});

module.exports = router;
