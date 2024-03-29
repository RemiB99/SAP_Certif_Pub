using my.application as my from '../db/csv/data-model-projet';

@cds.query.limit: 100000
service SAPService {
  entity Users as projection on my.Users;
  entity Questions as projection on my.Questions;
  entity QuestionTypes as projection on my.QuestionTypes;
  entity Statistiques as projection on my.Statistiques;
}