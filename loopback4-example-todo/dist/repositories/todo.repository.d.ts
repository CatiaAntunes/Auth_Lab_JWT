import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDatasource } from '../datasources/mysql.datasource';
import { Todo, TodoRelations } from '../models';
export declare class TodoRepository extends DefaultCrudRepository<Todo, typeof Todo.prototype.id, TodoRelations> {
    constructor(dataSource: MysqlDatasource);
}
