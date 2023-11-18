## Project Setup

```
npm intall
```

## Start up the server using

```
npm start || npm run dev
```

#### To test out the API, install Postman on your computer or ThunderClient extension on VS Code.

And make a GET request to this route: 'http://localhost:5000/api/v1/products'

#### You can filter the products by passing any of the following query paramters:

- category
- title
- brand
- featured

#### You can also sort by 'price', 'stock', 'discountPercentage', 'rating'. To sort in descending order, put a '-' in front of any of them, e.g sort=-price

#### You can choose to return a particular set of properties, e.g. if you only want to return the names of the products with their prices, use the query paramter: select=name,price

### Lastly, you can filter 'rating', 'stock', 'price' values. For example, you can fetch products whose price is greater than 100 using the query parameter: numericFilters=price>=100