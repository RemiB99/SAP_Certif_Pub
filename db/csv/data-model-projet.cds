namespace my.application;

entity Users {
  key ID : Integer;
  username  : String;
  mail : String;
  password  : String;
  role : Boolean;
  firstName : String;
  lastName : String;
  job : String;
}

entity Questions {
    key ID : Integer;
    type : String;
    description : String;
    nbAns : Integer;
    Answer1 : String;
    Answer2 : String;
    Answer3 : String;
    Answer4 : String;
    Answer5 : String;
    Answer6 : String;
    Answer7 : String;
    Answer8 : String;
    Answer9 : String;
    Answer10 : String;
    Answer11 : String;
    Valid1 : Boolean;
    Valid2 : Boolean;
    Valid3 : Boolean;
    Valid4 : Boolean;
    Valid5 : Boolean;
    Valid6 : Boolean;
    Valid7 : Boolean;
    Valid8 : Boolean;
    Valid9 : Boolean;
    Valid10 : Boolean;
    Valid11 : Boolean;
}

entity QuestionTypes{
    key ID : Integer;
    name : String;
    description : String;
}

entity Statistiques{
  key ID : Integer;
  user : String;
  typeQuestionnaire : String;
  date : Date;
  heure : Time;
  nbQ : Integer;
  nbJuste : Integer;
  pourcentage : Decimal;
  learningMode : Boolean;
  reponsesAlea : Boolean;
  questionsAlea : Boolean;
  baseID : Integer;
}