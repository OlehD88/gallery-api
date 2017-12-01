import Category from '../models/Category';

export const getCategories = (req, res) => {
  Category.find()
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

export const getCategoryById = (req, res) => {
  Category.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

export const createCategory = (req, res) => {
  Category.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

export const editCategory = (req, res) => {
  Category.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

export const deleteCategory = (req, res) => {
  Category.findOneAndRemove({ _id: req.params.id })
    .then(data => res.send({ message: 'Category has been deleted' }))
    .catch(err => res.send(err));
};
