import React from 'react'

const Products = () => {

  const products = [
    {
        id: 1,
        title: "Chocolate Truffle Cake",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://cdn.stamped.io/uploads/productImages/134088_4208467651.jpg?tr=h-180",
        rating: { rate: 3.9, count: 120 },
      },
      {
        id: 2,
        title: "Red Velvet Cake",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://cdn.stamped.io/uploads/productImages/134088_4208630083.jpg?tr=h-180",
        rating: { rate: 4.1, count: 259 },
      },
      {
        id: 3,
        title: "Strawberry Shortcake",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/cake_strawberry_large.jpg?v=1564803777",
        rating: { rate: 4.7, count: 500 },
      },
      {
        id: 4,
        title: "Black Forest Cake",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/black_forest_cake_large.png?v=1449636368",
        rating: { rate: 2.1, count: 430 },
      },
      {
        id: 5,
        title:
          "Key Lime Cheesecake",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/keylime_cheesecake_large.jpg?v=1566168648",
        rating: { rate: 4.6, count: 400 },
      },
      {
        id: 6,
        title: "Japanese Cheesecake",
        price: 168,
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/Japanese_Cheesecake_large.jpg?v=1564540203",
        rating: { rate: 3.9, count: 70 },
      },
      {
        id: 7,
        title: "Blueberry Cheesecake",
        price: 9.99,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/cheesecake_blueberry_cheesecake_large.png?v=1455856526",
        rating: { rate: 3, count: 400 },
      },
      {
        id: 8,
        title: "Famous New York Cheesecake",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/NY_Cheesecake_large.jpg?v=1566149840",
        rating: { rate: 1.9, count: 100 },
      },
      {
        id: 9,
        title: "Vanilla Bean Cream Puff",
        price: 64,
        description:
          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/puff_Vanilla_large.jpg?v=1564538907",
        rating: { rate: 3.3, count: 203 },
      },
      {
        id: 10,
        title: "Cookies & Cream Party Cupcake",
        price: 109,
        description:
          "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/mini_party_catering_cookies_n_cream_cupcake_large.png?v=1455862626",
        rating: { rate: 2.9, count: 470 },
      },
      {
        id: 11,
        title:
          "Chocolate Peanut Butter Party",
        price: 109,
        description:
          "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/mini_party_catering_chocolate_peanut_butter_cupcake_large.png?v=1455862112",
        rating: { rate: 4.8, count: 319 },
      },
      {
        id: 12,
        title:
          "Red Velvet Party Cupcake",
        price: 114,
        description:
          "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://cdn.shopify.com/s/files/1/1087/0244/products/mini_party_catering_red_velvet_cupcake_large.png?v=1455860949",
        rating: { rate: 4.8, count: 400 },
      }
]

  return (
    <div className="d-flex gap-5 flex-wrap justify-content-center my-5 align-content-center">
        {
          products.map(product => (
            <div className="card p-3 shadow" style={{ width: "18rem" }}>
              <img src={product.image} className="card-img-top card-img" alt="" style={{}}/>
              <div className="">
                <h6>{product.title}</h6>
              </div>
              <div className='d-flex justify-content-between'>
                <div>
                <p className=' bg-warning p-1 badge'>${product.price}</p>
                </div>
                <div className=''>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star'></i>
                </div>
              </div>
              <div className='my-2'>
                <a href="#" class="btn btn-primary me-2">View</a>
                <a href="#" class="btn btn-dark">Order</a>
              </div>
            </div>
          ))
        }
      </div>
  )
}

export default Products
