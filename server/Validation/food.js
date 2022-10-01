import Joi from "joi";

export const ValidateRestaurantId = (resId) => {
  const Schema = Joi.object({
    _id: Joi.string().required(),
  });

  return Schema.validateAsync(resId);
};
export const Validatecategory = (category) => {
  const Schema = Joi.object({
    category: Joi.string().required(),
  });

  return Schema.validateAsync(category);
};