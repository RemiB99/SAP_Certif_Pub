using my.application as my from '../db/csv/data-model-projet';

@cds.query.limit: 100000
service SAPService {
  entity Users as projection on my.Users;
  entity Questions @readonly as projection on my.Questions;
  entity QuestionTypes as projection on my.QuestionTypes;
}