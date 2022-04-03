using my.application as my from '../db/csv/data-model-projet';

service SAPService {
  entity Users @readonly as projection on my.Users;
  entity Questions @readonly as projection on my.Questions;
}