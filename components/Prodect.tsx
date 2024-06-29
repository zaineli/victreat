const products = [
    { title: "Innovative", class: "bg-gradient-to-r from-blue-500 to-purple-500" },
    { title: "Epic", class: "bg-gradient-to-r from-green-500 to-teal-500" },
    { title: "Brilliance", class: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { title: "Genius", class: "bg-gradient-to-r from-red-500 to-yellow-500" },
    { title: "Creative", class: "bg-gradient-to-r from-yellow-500 to-orange-500" },
  ];
  
  const Products = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-100">
        {products.map((product, index) => (
          <div key={index} className={`p-6 rounded-lg text-white ${product.class}`}>
            <h2 className="text-2xl font-bold">{product.title}</h2>
          </div>
        ))}
      </div>
    );
  };
  
  export default Products;
  