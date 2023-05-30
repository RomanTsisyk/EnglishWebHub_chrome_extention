document.addEventListener('DOMContentLoaded', function () {
  var category1Column = document.getElementById('category1Column');
  var category2Column = document.getElementById('category2Column');
  var category3Column = document.getElementById('category3Column');
  var category4Column = document.getElementById('category4Column');
  var category5Column = document.getElementById('category5Column');
  var category6Column = document.getElementById('category6Column');
  
  var category7Column = document.getElementById('category7Column');
  var category8Column = document.getElementById('category8Column');
  var category9Column = document.getElementById('category9Column');
  var category10Column = document.getElementById('category10Column');
  var category11Column = document.getElementById('category11Column');
  var category12Column = document.getElementById('category12Column');
  var category13Column = document.getElementById('category13Column');

  var category1List = document.getElementById('category1');
  var category2List = document.getElementById('category2');
  var category3List = document.getElementById('category3');
  var category4List = document.getElementById('category4');
  var category5List = document.getElementById('category5');
  var category6List = document.getElementById('category6');

  var category7List = document.getElementById('category7');
  var category8List = document.getElementById('category8');
  var category9List = document.getElementById('category9');
  var category10List = document.getElementById('category10');
  var category11List = document.getElementById('category11');
  var category12List = document.getElementById('category12');
  var category13List = document.getElementById('category13');

  var links = [
    { name: 'Duolingo', url: 'https://www.duolingo.com/', category: 0 },
    { name: 'BBC Learning English', url: 'http://www.bbc.co.uk/learningenglish/', category: 0 },
    { name: 'EnglishClub', url: 'https://www.englishclub.com/', category: 0 },
    { name: 'ESL Gold', url: 'https://www.eslgold.com/', category: 0 },
    { name: 'British Council - LearnEnglish', url: 'https://learnenglish.britishcouncil.org/', category: 0 },
    { name: 'Busuu', url: 'https://www.busuu.com/', category: 0 },
    { name: 'Open English', url: 'https://www.openenglish.com/', category: 0 },
    { name: 'EngVid', url: 'https://www.engvid.com/', category: 0 },
    { name: 'EnglishCentral', url: 'https://www.englishcentral.com/', category: 0 },
    { name: 'Livemocha', url: 'https://www.livemocha.com/', category: 0 },
    { name: 'FluentU', url: 'https://www.fluentu.com/', category: 0 },
    { name: 'Quizlet', url: 'https://quizlet.com/', category: 1 },
    { name: 'Memrise', url: 'https://www.memrise.com/', category: 1 },
    { name: 'Vocabulary.com', url: 'https://www.vocabulary.com/', category: 1 },
    { name: 'WordReference', url: 'https://www.wordreference.com/', category: 2 },
    { name: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/', category: 2 },
    { name: 'Merriam-Webster', url: 'https://www.merriam-webster.com/', category: 2 },
    { name: 'Oxford Learner\'s Dictionaries', url: 'https://www.oxfordlearnersdictionaries.com/', category: 2 },
    { name: 'Grammarly', url: 'https://www.grammarly.com/', category: 3 },
    { name: 'Purdue Online Writing Lab (OWL)', url: 'https://owl.purdue.edu/', category: 3 },
    { name: 'English Grammar in Use by Raymond Murphy', url: 'https://www.cambridge.org/us/grammar-in-use/', category: 3 },
    { name: 'IELTS.org', url: 'https://www.ielts.org/', category: 4 },
    { name: 'TOEFL iBT', url: 'https://www.ets.org/toefl', category: 4 },
    { name: 'IELTS Liz', url: 'https://ieltsliz.com/', category: 4 },
    { name: 'TOEFL Resources', url: 'https://www.toeflresources.com/', category: 4 },
    { name: 'Breaking News English', url: 'https://breakingnewsenglish.com/', category: 5 },
    { name: 'The New York Times - Learning Network', url: 'https://www.nytimes.com/section/learning', category: 5 },
    { name: 'ReadTheory', url: 'https://www.readtheory.org/', category: 5 },
	    { name: 'News in Levels', url: 'https://www.newsinlevels.com/', category: 5 },
    { name: 'ManyThings.org', url: 'https://www.manythings.org/', category: 6 },
    { name: 'ESL Lab', url: 'https://www.esl-lab.com/', category: 6 },
    { name: 'Randall\'s ESL Cyber Listening Lab', url: 'https://www.esl-lab.com/', category: 6 },
    { name: 'Learn English with EnglishClass101.com', url: 'https://www.englishclass101.com/', category: 6 },
    { name: 'TED Talks', url: 'https://www.ted.com/', category: 6 },
    { name: 'Breaking News English', url: 'https://breakingnewsenglish.com/', category: 6 },
    { name: 'Easy English', url: 'https://www.youtube.com/playlist?list=PL98FA9AC4746FDD0D', category: 6 },
    { name: 'Writing.com', url: 'https://www.writing.com/', category: 7 },
    { name: 'EnglishPage', url: 'https://www.englishpage.com/', category: 7 },
    { name: 'Purdue Online Writing Lab (OWL)', url: 'https://owl.purdue.edu/', category: 7 },
    { name: 'Write & Improve', url: 'https://writeandimprove.com/', category: 7 },
    { name: 'EnglishForEveryone.org', url: 'https://englishforeveryone.org/', category: 7 },
    { name: 'Perfect English Grammar', url: 'https://www.perfect-english-grammar.com/', category: 7 },
    { name: 'English Grammar 101', url: 'https://www.englishgrammar101.com/', category: 7 },
    { name: 'Road to Grammar', url: 'https://www.roadtogrammar.com/', category: 7 },
    { name: 'TalkEnglish.com', url: 'https://www.talkenglish.com/', category: 8 },
    { name: 'ESL Discussions', url: 'https://www.esldiscussions.com/', category: 8 },
    { name: 'ESL Partyland', url: 'http://www.eslpartyland.com/', category: 8 },
    { name: 'ESL Games World', url: 'http://www.eslgamesworld.com/', category: 8 },
    { name: 'ESLflow', url: 'http://www.eslflow.com/', category: 8 },
    { name: 'ESL Kids World', url: 'https://www.eslkidsworld.com/', category: 8 },
    { name: 'ESL Tower', url: 'https://www.esltower.com/', category: 8 },
    { name: 'Phrasemix', url: 'https://www.phrasemix.com/', category: 8 },
    { name: 'EnglishCentral', url: 'https://www.englishcentral.com/', category: 8 },
    { name: 'Conversation Questions for the ESL/EFL Classroom', url: 'https://www.esldiscussions.com/', category: 8 },
    { name: 'ESL Fast', url: 'https://www.eslfast.com/', category: 6 },

       { name: 'News in Levels', url: 'https://www.newsinlevels.com/', category: 5 },
    { name: 'ManyThings.org', url: 'https://www.manythings.org/', category: 6 },
    { name: 'ESL Lab', url: 'https://www.esl-lab.com/', category: 6 },
    { name: 'Randall\'s ESL Cyber Listening Lab', url: 'https://www.esl-lab.com/', category: 6 },
    { name: 'Learn English with EnglishClass101.com', url: 'https://www.englishclass101.com/', category: 6 },
    { name: 'TED Talks', url: 'https://www.ted.com/', category: 6 },
    { name: 'Breaking News English', url: 'https://breakingnewsenglish.com/', category: 6 },
    { name: 'Easy English', url: 'https://www.youtube.com/playlist?list=PL98FA9AC4746FDD0D', category: 6 },
    { name: 'Writing.com', url: 'https://www.writing.com/', category: 7 },
    { name: 'EnglishPage', url: 'https://www.englishpage.com/', category: 7 },
    { name: 'Purdue Online Writing Lab (OWL)', url: 'https://owl.purdue.edu/', category: 7 },
    { name: 'Write & Improve', url: 'https://writeandimprove.com/', category: 7 },
    { name: 'EnglishForEveryone.org', url: 'https://englishforeveryone.org/', category: 7 },
    { name: 'Perfect English Grammar', url: 'https://www.perfect-english-grammar.com/', category: 7 },
    { name: 'English Grammar 101', url: 'https://www.englishgrammar101.com/', category: 7 },
    { name: 'Road to Grammar', url: 'https://www.roadtogrammar.com/', category: 7 },
    { name: 'TalkEnglish.com', url: 'https://www.talkenglish.com/', category: 8 },
    { name: 'ESL Discussions', url: 'https://www.esldiscussions.com/', category: 8 },
    { name: 'ESL Partyland', url: 'http://www.eslpartyland.com/', category: 8 },
    { name: 'ESL Games World', url: 'http://www.eslgamesworld.com/', category: 8 },
    { name: 'ESLflow', url: 'http://www.eslflow.com/', category: 8 },
    { name: 'ESL Kids World', url: 'https://www.eslkidsworld.com/', category: 8 },
    { name: 'ESL Tower', url: 'https://www.esltower.com/', category: 8 },
    { name: 'Phrasemix', url: 'https://www.phrasemix.com/', category: 8 },
    { name: 'EnglishCentral', url: 'https://www.englishcentral.com/', category: 8 },
    { name: 'Conversation Questions for the ESL/EFL Classroom', url: 'https://www.esldiscussions.com/', category: 8 },
    { name: 'ESL Fast', url: 'https://www.eslfast.com/', category: 6 },
    { name: 'English Listening Lesson Library Online (ELLLO)', url: 'https://www.elllo.org/', category: 6 },
    { name: 'Podcasts in English', url: 'https://www.podcastsinenglish.com/', category: 6 },
    { name: 'English Listening Practice', url: 'https://www.englishlisteningpractice.com/', category: 6 },
    { name: 'ESLPod', url: 'https://www.eslpod.com/', category: 6 },
    { name: 'Voice of America - Learning English', url: 'https://learningenglish.voanews.com/', category: 6 },
    { name: 'English Page - Listening', url: 'https://www.englishpage.com/listening/', category: 6 },
    { name: 'English Listening Level Test', url: 'https://www.examenglish.com/leveltest/listening_level_test.htm', category: 6 },
    { name: 'English Speaking Practice', url: 'https://www.speakenglish.biz/', category: 9 },
    { name: 'My Language Exchange', url: 'https://www.mylanguageexchange.com/', category: 9 },
    { name: 'iTalki', url: 'https://www.italki.com/', category: 9 },
    { name: 'English Language Forums', url: 'https://www.englishforums.com/', category: 9 },
    { name: 'HelloTalk', url: 'https://www.hellotalk.com/', category: 9 },
    { name: 'ConversationExchange', url: 'https://www.conversationexchange.com/', category: 9 },
    { name: 'LanguageTool', url: 'https://languagetool.org/', category: 7 },
    { name: 'GrammarCheck', url: 'https://www.grammarcheck.net/', category: 7 },
    { name: 'Hemingway Editor', url: 'http://www.hemingwayapp.com/', category: 7 },
    { name: 'Writefull', url: 'https://writefull.com/', category: 7 },
    { name: 'Daily Writing Tips', url: 'https://www.dailywritingtips.com/', category: 7 },
    { name: 'English Forums - Writing', url: 'https://www.englishforums.com/writing/', category: 7 },
    { name: 'Grammar Bytes!', url: 'https://www.chompchomp.com/', category: 3 },
    { name: 'English Grammar Online', url: 'https://www.ego4u.com/en/cram-up/grammar', category: 3 },
    { name: 'English Grammar Secrets', url: 'https://www.englishgrammarsecrets.com/', category: 3 },
    { name: 'English Grammar Revolution', url: 'https://www.english-grammar-revolution.com/', category: 3 },
    { name: 'English Maven', url: 'http://www.englishmaven.org/', category: 3 },
    { name: 'EnglishLeap', url: 'https://www.englishleap.com/', category: 3 },
    { name: 'GrammarBook', url: 'https://www.grammarbook.com/', category: 3 },
    { name: 'The Free Dictionary', url: 'https://www.thefreedictionary.com/', category: 2 },
    { name: 'Dictionary.com', url: 'https://www.dictionary.com/', category: 2 },


    { name: 'Merriam-Webster Dictionary', url: 'https://www.merriam-webster.com/', category: 2 },
    { name: 'Oxford Dictionaries', url: 'https://www.oxforddictionaries.com/', category: 2 },
    { name: 'Lingoda', url: 'https://www.lingoda.com/', category: 0 },
    { name: 'EnglishHints', url: 'https://englishhints.com/', category: 0 },
    { name: 'English Online', url: 'https://englishlive.ef.com/en-us/', category: 0 },
    { name: 'LearnEnglish Kids', url: 'https://learnenglishkids.britishcouncil.org/', category: 10 },
    { name: 'Fun English Games', url: 'https://www.funenglishgames.com/', category: 10 },
    { name: 'PBS Kids', url: 'https://pbskids.org/', category: 10 },
    { name: 'National Geographic Kids', url: 'https://kids.nationalgeographic.com/', category: 10 },
    { name: 'ABCmouse', url: 'https://www.abcmouse.com/', category: 10 },
    { name: 'British Council - LearnEnglish Teens', url: 'https://learnenglishteens.britishcouncil.org/', category: 11 },
    { name: 'Teenagers - British Council', url: 'https://www.britishcouncil.org/school-resources/find/tweens', category: 11 },
    { name: 'ESL Teens Lessons', url: 'https://www.eslteenslessons.com/', category: 11 },
    { name: 'EnglishClub - Young Learners', url: 'https://www.englishclub.com/young-learners/', category: 11 },
    { name: 'Breaking News English - Teenagers', url: 'https://breakingnewsenglish.com/teenagers.html', category: 11 },
    { name: 'EnglishHints - Teens', url: 'https://englishhints.com/teen-english.html', category: 11 },
    { name: 'ESL Games Plus', url: 'https://www.eslgamesplus.com/', category: 12 },
    { name: 'ESL Brains', url: 'https://www.eslbrains.com/', category: 12 },
    { name: 'Learning Chocolate', url: 'https://www.learningchocolate.com/', category: 12 },
    { name: 'ESL Games World', url: 'http://www.eslgamesworld.com/', category: 12 },
    { name: 'ESL KidStuff', url: 'https://www.eslkidstuff.com/', category: 12 },
    { name: 'ESL-Galaxy', url: 'http://www.esl-galaxy.com/', category: 12 },
    { name: 'ESL Games Board', url: 'https://eslgamesboard.com/', category: 12 },
    { name: 'ESL Lounge', url: 'https://www.esl-lounge.com/', category: 12 },
    { name: 'ESL Tower', url: 'https://www.esltower.com/', category: 12 }
  ];

  function createLink(link) {
    var listItem = document.createElement('li');
    var anchor = document.createElement('a');
    anchor.textContent = link.name;
    anchor.href = link.url;
    listItem.appendChild(anchor);
    return listItem;
  }

  function appendLinkToCategory(link, categoryList) {
    var listItem = createLink(link);
    categoryList.appendChild(listItem);
  }


  function toggleCategory(columnId) {
  var column = document.getElementById(columnId);
  column.classList.toggle("active-column");
  var categoryList = column.querySelector("ul");
  categoryList.style.display = (categoryList.style.display === 'none') ? 'block' : 'none';
}


  category1Column.addEventListener('click', function () {
    toggleCategory(category1Column);
  });

  category2Column.addEventListener('click', function () {
    toggleCategory(category2Column);
  });

  category3Column.addEventListener('click', function () {
    toggleCategory(category3Column);
  });

  category4Column.addEventListener('click', function () {
    toggleCategory(category4Column);
  });

  category5Column.addEventListener('click', function () {
    toggleCategory(category5Column);
  });

  category6Column.addEventListener('click', function () {
    toggleCategory(category7Column);
  });


  category7Column.addEventListener('click', function () {
    toggleCategory(category8Column);
  });

  category8Column.addEventListener('click', function () {
    toggleCategory(category8Column);
  });

  category9Column.addEventListener('click', function () {
    toggleCategory(category9Column);
  });

  category10Column.addEventListener('click', function () {
    toggleCategory(category10Column);
  });

  category11Column.addEventListener('click', function () {
    toggleCategory(category11Column);
  });

  category12Column.addEventListener('click', function () {
    toggleCategory(category12Column);
  });
  
  category13Column.addEventListener('click', function () {
    toggleCategory(category13Column);
  });

  links.forEach(function (link) {
    switch (link.category) {
      case 0:
        appendLinkToCategory(link, category1List);
        break;
      case 1:
        appendLinkToCategory(link, category2List);
        break;
      case 2:
        appendLinkToCategory(link, category3List);
        break;
      case 3:
        appendLinkToCategory(link, category4List);
        break;
      case 4:
        appendLinkToCategory(link, category5List);
        break;
      case 5:
        appendLinkToCategory(link, category6List);
        break;
      case 6:
        appendLinkToCategory(link, category7List);
        break;
      case 7:
        appendLinkToCategory(link, category8List);
        break;
      case 8:
        appendLinkToCategory(link, category9List);
        break;
      case 9:
        appendLinkToCategory(link, category10List);
        break;
      case 10:
        appendLinkToCategory(link, category11List);
        break;
      case 11:
        appendLinkToCategory(link, category12List);
        break;
      case 12:
        appendLinkToCategory(link, category13List);
        break;
      default:
        // Handle unrecognized category
        break;
    }
  });
});
