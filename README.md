# Car Management Dashboard

## API : Clean Archi
- Listening Server : [ [server/index.js](./server/index.js) ]
- Routes  : [ [server/routes/](./server/routes/) ]
- Controller : [ [server/controller/index.js](./server/controller/index.js) ]
- Services : [ [server/service/index.js](./server/service/index.js) ]
- Repository : [ [server/repository/index.js](./server/repository/index.js) ]

## Database Management : Postgres
- Config : [ [server/config/postgres.js](./server/config/postgres.js) ]
- Models : [ [server/models](./server/models) ]
- Migrations : [ [server/migrations](./server/migrations) ]

## Redis
- Config : [ [server/config/redis.js](./server/config/redis.js) ]
- Helper : [ [server/helper/redis.js](./server/helper/redis.js) ]

## Cloudinary
- Config : [ [server/config/cloudinary.js](./server/config/cloudinary.js) ]
- Helper : [ [server/helper/cloudinary.js](./server/helper/cloudinary.js) ]

This project involves managing rental cars and their respective sizes.

## Tables

### Cars

- `id` (integer): Primary key of the car.
- `name` (varchar): Name or model of the car.
- `rent_per_day` (integer): Rental cost per day for the car.
- `sizes_id` (integer): Foreign key referencing the size of the car.
- `photo` (text): URL or path to the photo of the car.
- `createdAt` (timestamp): Timestamp indicating when the record was created.
- `updatedAt` (timestamp): Timestamp indicating when the record was last updated.
- `deletedAt` (timestamp): Timestamp indicating when the record was soft-deleted.

### Sizes

- `id` (integer): Primary key of the size.
- `size_category` (varchar): Category or type of the size.
- `capacity` (integer): Capacity or size measurement.
- `createdAt` (timestamp): Timestamp indicating when the record was created.
- `updatedAt` (timestamp): Timestamp indicating when the record was last updated.
- `deletedAt` (timestamp): Timestamp indicating when the record was soft-deleted.

## Relationships

- Cars `sizes_id` references Sizes `id`, establishing a one-to-many relationship where one size can be associated with multiple cars.

![Untitled](https://github.com/dvlboo/24001085-km6-kuh-bcr-dbms-ch4/assets/92429096/0c8bccd6-1dad-4f91-b111-59d1a23be5bc)

