
function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}
const questions = [
  {
    id: 1,
    question: "What is the supreme law of the land?",
    answers: ["the Constitution","the courts","pursuit of happiness","checks and balances"]
  },
  {
    id: 2,
    question: "What does the Constitution do?",
    answers: ["sets up the government","reviews laws","resolves disputes","provide safety"]
  },
  {
    id: 3,
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answers: ["We the People", "Declaration of independence", "Together we're United", "We the Country"]
  },
  {
    id: 4,
    question: "What is an amendment?",
    answers: [ "a change","the Supreme Court", "the right to bear arms", "political liberty"]
  },
  {
    id: 5,
    question: "What do we call the first ten amendments to the Constitution?",
    answers: [ "the Bill of Rights", "freedom of speech", " the War between the States", " checks and balances"]
  },
  {
    id: 6,
    question: "What is one right or freedom from the First Amendment?",
    answers: [ "speech", "liberty", "life", "pursuit of happiness"]
  },
  {
    id: 7,
    question: "How many amendments does the Constitution have?",
    answers: [ "twenty-seven (27)", "twenty (20)", "twenty-five (25)", "twenty-nine (29)"]
  },
  {
    id: 8,
    question: "What did the Declaration of Independence do?",
    answers: [ "declared our independence (from Great Britain)", "declared our independence (from China)", "declared our independence (from Russia)", "declared our independence (from Japan)", "declared our independence (from Great Britain)"]
  },
  {
    id: 9,
    question: "What are two rights in the Declaration of Independence?",
    answers: [ "life and liberty", "religion and assembly", "press and speech", "love and liberty"]
  },
  {
    id: 10,
    question: "What is freedom of religion?",
    answers: [ "You can practice any religion, or not practice a religion", "You can only practice one religion at a time.", "It's illegal to practice a religion", "You are free to discriminate any religion"]
  },
  {
    id: 11,
    question: "What is the economic system in the United States?",
    answers: [ "capitalist economy", "traditional economy", "mixed economy", "command economy"]
  },
  {
    id: 12,
    question: "What is the “rule of law”?",
    answers: [ "Everyone must follow the law", "Government is above the law", "Some leaders can bend the law", "Everyone is above the law"]
  },
  {
    id: 13,
    question: "Name one branch or part of the government.",
    answers: [ "President", "Federal", "State", "CIA"]
  },
  {
    id: 14,
    question: "What stops one branch of government from becoming too powerful?",
    answers: [ "checks and balances", "the President", "congress", "the Constitution"]
  },
  {
    id: 15,
    question: "Who is in charge of the executive branch?",
    answers: [ "the President", "Senate and House", "the Vice President", "the Supreme Court"]
  },
  {
    id: 16,
    question: "Who makes federal laws?",
    answers: [ "Congress", "the President", "the United States", "the Vice President"]
  },
  {
    id: 17,
    question: "What are the two parts of the U.S. Congress?",
    answers: [ "the Senate and House (of Representatives)", "(U.S. and national) legislature", "Congress and Senate", "Federal and state"]
  },
  {
    id: 18,
    question: "How many U.S. Senators are there?",
    answers: [ "one hundred (100)", "seventy five (75)", "fifty (50)", "twenty five (25)"]
  },
  {
    id: 19,
    question: "We elect a U.S. Senator for how many years?",
    answers: [ "six (6)", "five (5)", "four (4)", "two (2)"]
  },
  {
    id: 21,
    question: "The House of Representatives has how many voting members?",
    answers: [ "four hundred thirty-five (435)", "four hundred (400)", "four hundred fifty (450)", "three hundred (300)"]
  }
];

shuffleArray(questions);




export default questions;
