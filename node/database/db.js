import { Sequelize } from 'sequelize'
const db = new Sequelize('database_app','root','root', {
    host:'localhost', 
    dialect:'mysql',
    port:'8889'
})
export default db