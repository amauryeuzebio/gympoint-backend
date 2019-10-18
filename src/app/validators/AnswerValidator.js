import * as Yup from 'yup';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    answer: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body)))
    return res.status(400).json({ error: 'Validation fails' });

  return next();
};