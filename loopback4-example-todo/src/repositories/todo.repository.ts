import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import { MysqlDatasource } from '../datasources/mysql.datasource';
import {Todo, TodoRelations} from '../models';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: MysqlDatasource,
  ) {
    super(Todo, dataSource);
  }
}
