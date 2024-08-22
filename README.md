# To-Do List

## Description

**To-Do List** is an application designed to manage your daily tasks. It allows you to add, view, edit, and remove tasks, helping you stay organized and productive.

## Features

- Add new tasks
- Mark tasks as completed
- Edit existing tasks
- Remove tasks
- View pending and completed tasks

## Technologies

- **Front-end**: [EJS](https://www.npmjs.com/package/ejs), [Bulma](https://bulma.io/)
- **Back-end**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)
- **Other Dependencies**: [EJS](https://www.npmjs.com/package/ejs)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MatUmbria/to-do-list.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd to-do-list
    ```

3. **Install dependencies**:
    - For the back-end:
        ```bash
        npm install
        ```

4. **Set up the database**:
    - Create a `.env` file in the `server` directory and add the necessary environment variables, such as the database URL.

5. **Start the server**:
    - Use `npm run dev` to start the server with `nodemon`, which automatically restarts the server on code changes:
        ```bash
        npm run dev
        ```

## Package Information

- **Name**: to-do-list
- **Version**: 1.0.0
- **Description**: Lista de tarefas
- **Main File**: `app.js`
- **Author**: Mateus Umbria
- **License**: ISC

### Dependencies

- [ejs](https://www.npmjs.com/package/ejs): ^3.1.10
- [express](https://expressjs.com/): ^4.19.2
- [method-override](https://www.npmjs.com/package/method-override): ^3.0.0
- [mongoose](https://mongoosejs.com/): ^8.4.4

### Dev Dependencies

- [nodemon](https://www.npmjs.com/package/nodemon): ^3.1.3

## Usage

Once the server is running, access the application at [http://localhost:3000](http://localhost:3000).

## Contribution

Feel free to contribute to the project! For suggestions, bug fixes, or improvements, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/branch-name`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/branch-name`).
5. Open a pull request.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC). See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact me at [mateusumbria@gmail.com](mailto:mateusumbria@gmail.com).
