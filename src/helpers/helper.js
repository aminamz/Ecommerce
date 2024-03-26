const searchFilter = (product, search) => {
  if (!search) return product;
  const newProduct = product.filter((p) => p.title.toLowerCase().includes(search));
  return newProduct;
};

const categoryFilter = (product, category) => {
  if (!category) return product;
  const newProduct = product.filter((p) => p.category === category);
  return newProduct;
};

export { searchFilter, categoryFilter };
