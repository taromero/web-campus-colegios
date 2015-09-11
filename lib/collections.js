var _global = typeof global !== 'undefined' ? global : window

_global.Exams = new Mongo.Collection('exams')
_global.ExamScores = new Mongo.Collection('examNotes')
_global.Reports = new Mongo.Collection('reports')
_global.Subjects = new Mongo.Collection('subjects')
_global.Courses = new Mongo.Collection('courses')
_global.Events = new Mongo.Collection('events')
_global.Resources = new Mongo.Collection('resources')
_global.Attendances = new Mongo.Collection('attendance')
_global.ScoreCards = new Mongo.Collection('score_cards')
_global.ScoreCardSubjects = new Mongo.Collection('score_card_subjects')
_global.PeriodsScores = new Mongo.Collection('periods_scores')
