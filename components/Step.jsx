import Entity from "@/components/Entity";
import Location from "@/components/Location";
import DateAndTime from "@/components/DateAndTime";
import CheckBoxContainer from "@/components/CheckBoxContainer";
import TrueFalse from "@/components/TrueFalse";
import Card from "@/components/Card";
import QuestionNumber from "@/components/QuestionNumber";
import Question from "@/components/Question";

const QuestionData = [
  [
    {
      number: 1,
      question: "Which best describes you?",
      required: true,
      height: 311,
      cardName: "ENTITY",
    },
    {
      number: 2,
      question: "Where did the incident occur?",
      required: true,
      height: 240,
      cardName: "LOCATION",
    },
    {
      number: 3,
      question: "When did event occur?",
      required: true,
      height: 169,
      cardName: "DATEANDTIME",
    },
    {
      number: 4,
      question: [
        "Select the type of bullying.",
        "(You can select multiple options)",
      ],
      required: true,
      height: 321,
      cardName: "BULLYTYPE",
    },
    {
      number: 5,
      question: "Was anyone injured?",
      required: false,
      height: 171,
      cardName: "INJURED",
    },
  ],
  [
    {
      number: 6,
      question: "Was any property damaged or not?",
      required: false,
      height: 201,
      cardName: "PROPERTYDAMAGED",
    },
    {
      number: 7,
      question: "Was the incident reported to police?",
      required: false,
      height: 201,
      cardName: "REPORTEDTOPOLICE",
    },
    {
      number: 8,
      question: "Bullying Behaviours",
      required: true,
      height: 347,
      cardName: "BEHAVIOR",
    },
    {
      number: 9,
      question: "Preferred contact method",
      required: false,
      height: 259,
      cardName: "CONTACTMETHOD",
    },
  ],
];

export default Step = ({ step }) => {
  return QuestionData[step].map((element, index) => {
    return (
      <Card height={element.height} key={index}>
        <QuestionNumber number={element.number} />
        {Array.isArray(element.question) ? (
          <Question
            question={element.question[0]}
            optionalText={element.question[1]}
          />
        ) : (
          <Question question={element.question} />
        )}
        {getCardFromName(element.cardName)}
      </Card>
    );
  });
};

const getCardFromName = (currentCardName) => {
  switch (currentCardName) {
    case "ENTITY":
      return <Entity />;
      break;
    case "LOCATION":
      return <Location />;
      break;
    case "DATEANDTIME":
      return <DateAndTime />;
    case "BULLYTYPE":
      return (
        <CheckBoxContainer
          options={["Verbal", "Physical", "Social", "Cyberbullying"]}
          cardName="BULLYTYPE"
        />
      );
    case "INJURED":
      return <TrueFalse cardName="INJURED" />;
    case "PROPERTYDAMAGED":
      return <TrueFalse cardName="PROPERTYDAMAGED" />;
      break;
    case "REPORTEDTOPOLICE":
      return <TrueFalse cardName="REPORTEDTOPOLICE" />;
      break;
    case "BEHAVIOR":
      return (
        <CheckBoxContainer
          options={[
            "Pushed, grabbed, touched",
            "Struck (Punched or kicked)",
            "Threatened",
            "Property stolen or damaged",
          ]}
          cardName="BEHAVIOR"
        />
      );
    case "CONTACTMETHOD":
      return (
        <CheckBoxContainer
          options={["At School", "After School", "Please contact my parents"]}
          cardName="CONTACTMETHOD"
        />
      );
    default:
      break;
  }
};
