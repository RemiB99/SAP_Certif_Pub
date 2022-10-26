using my.application as my from '../db/csv/data-model-projet';

@cds.query.limit: 100000

@(requires : 'authenticated-user')
service SAPService {
  entity Users @readonly as projection on my.Users;
  entity Questions @readonly as projection on my.Questions;
  @(restrict: [
      {grant: 'READ', to: 'read:Questions'},
      {grant: 'WRITE', to: 'write:Questions'},
  ])
  entity QuestionTypes @readonly as projection on my.QuestionTypes;
}

@(requires :'admin')
service AdminSAPService {
  entity Users as projection on my.Users;
  entity Questions as projection on my.Questions;
  entity QuestionTypes as projection on my.QuestionTypes;
}