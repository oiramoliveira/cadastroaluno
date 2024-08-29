const Aluno = require('../models/aluno');

exports.getAllAlunos = (req, res) => {
    Aluno.getAll((err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.getAlunoById = (req, res) => {
    Aluno.getById(req.params.id, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results[0]);
    });
};

exports.createAluno = (req, res) => {
    Aluno.create(req.body, (err, results) => {
        if (err) res.status(500).send(err);
        res.status(201).json({ id: results.insertId, ...req.body });
    });
};

exports.updateAluno = (req, res) => {
    Aluno.update(req.params.id, req.body, (err, results) => {
        if (err) res.status(500).send(err);
        res.json({ id: req.params.id, ...req.body });
    });
};

exports.deleteAluno = (req, res) => {
    Aluno.delete(req.params.id, (err, results) => {
        if (err) res.status(500).send(err);
        res.status(204).send();
    });
};
