// مصفوفة بيانات المنتجات
const products = [
    { name: 'لابتوب', category: 'Electronics', price: 800 },
    { name: 'سماعات', category: 'Electronics', price: 50 },
    { name: 'قميص', category: 'Clothing', price: 20 },
    { name: 'هاتف ذكي', category: 'Electronics', price: 600 },
    { name: 'سترة', category: 'Clothing', price: 100 },
    { name: 'تابلت', category: 'Electronics', price: 300 },
    { name: 'كتاب تعلم البرمجة', category: 'Books', price: 25 },
    { name: 'مفكرة', category: 'Stationery', price: 5 },
    { name: 'كتاب التاريخ', category: 'Books', price: 30 },
    { name: 'أقلام', category: 'Stationery', price: 2 }
];

// دالة لإنشاء وعرض المنتجات
function displayProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // مسح المنتجات الحالية

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-price">$${product.price}</div>
        `;

        productList.appendChild(productItem);
    });
}

// دالة التصفية حسب الفئة
function filterProducts(category) {
    let filteredProducts = category === 'All' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

// العرض المبدئي لجميع المنتجات
filterProducts('All');
