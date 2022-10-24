using my.application as my from '../db/csv/data-model-projet';

@cds.query.limit: 100000
service SAPService @(requires :'authenticated-user') {
  entity Users @readonly as projection on my.Users;
  entity Questions @readonly as projection on my.Questions;
  entity QuestionTypes @readonly as projection on my.QuestionTypes;
}

service AdminSAPService @(requires :'admin'){
  entity Users as projection on my.Users;
  entity Questions as projection on my.Questions;
  entity QuestionTypes as projection on my.QuestionTypes;
}