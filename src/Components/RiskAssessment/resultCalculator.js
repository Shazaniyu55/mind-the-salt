
export const HypertensionRiskCalculator = (answers) => {
  // Initialize a score variable
  let score = 0;

  // Define scoring rules based on sections and questions
  const scoringRules = {
      section_0: {
        'AGE': {
          'UNDER_18': 0,
          '18-30': 0,
          '31-45': 1,
          '46-60': 2,
          '61+': 3
        },
        'GENDER': {
          'MALE': 1,
          'FEMALE': 0,
          'PREFER_NOT_TO_SAY': 0,
          'OTHER': 0
        }
      },
      section_1: {
        'FAMILY_HISTORY_OF_HYPERTENSION': {
          'YES': 2,
          'NO': 0
        },
        'ETHNIC_BACKGROUND': {
          'AFRICAN_OR_CARIBBEAN_DESCENT': 2,
          'ASIAN_DESCENT': 1,
          'CAUCASIAN': 1,
          'OTHER': 0
        }
      },
      section_2: {
        'SMOKING_HABITS': {
          'NON-SMOKER': 0,
          'EX-SMOKER': 1,
          'CURRENT_SMOKER': 2
        },
        'ALCOHOL_CONSUMPTION': {
          'I_DO_NOT_DRINK_ALCOHOL': 0,
          'OCCASIONALLY_(LESS_THAN_2_TIMES_PER_WEEK)': 0,
          'REGULARLY_(2-4_TIMES_PER_WEEK)': 1,
          'FREQUENTLY_(5+_TIMES_PER_WEEK)': 2
        }
      },
      section_3: {
        'PHYSICAL_ACTIVITY_LEVEL': {
          'SEDENTARY(LITTLE_OR_NO_EXERCISE)': 3,
          'MODERATELY_ACTIVE_(EXERCISE_1_DAY_A_WEEK)': 2,
          'ACTIVE_(EXERCISE_2_-_3_DAYS_A_WEEK)': 1,
          'VERY_ACTIVE_(EXERCISE_6-7_DAYS_A_WEEK)': 0
        },
        'DIETARY_HABITS': {
          'HIGH_IN_FRUITS_AND_VEGETABLES': 0,
          'HIGH_IN_PROCESSED_OR_FATTY_FOODS': 2,
          'BALANCED': 1,
          'I’M_NOT_SURE': 1
        }
      },
      section_4: {
        'BODY_MASS_INDEX_(BMI)': {
          'HEIGHT_(FEET)':0,
           'WEIGHT_(KG)':0,
           'BMI':0,
          'UNDERWEIGHT_(BMI_<_18.5)': 0,
          'NORMAL_WEIGHT_(BMI_18.5–24.9)': 0,
          'OVERWEIGHT_(BMI_25–29.9)': 1,
          'OBESITY_(BMI_30_OR_HIGHER)': 2
        },
        'EXISTING_HEALTH_CONDITIONS': {
          'DIABETES': 2,
          'HIGH_CHOLESTEROL': 2,
          'KIDNEY_DISEASE': 2,
          'HEART_DISEASE': 2,
          'STROKE': 2,
          'NONE_OF_THE_ABOVE': 0
        }
      },
      section_5: {
        'BLOOD_PRESSURE_READINGS': {
          'NORMAL_(LESS_THAN_120/80_MM_HG)': 0,
          'ELEVATED_(120-129/<80_MM_HG)': 1,
          'HYPERTENSION_STAGE_1_(130-139/80-89_MM_HG)': 2,
          'HYPERTENSION_STAGE_2_(140_OR_HIGHER/90_OR_HIGHER_MM_HG)': 3
        },
        'STRESS_LEVELS': {
          'LOW': 0,
          'MODERATE': 1,
          'HIGH': 2,
          'VERY_HIGH': 3
        },
      },
      section_6: {
        'SLEEP_PATTERNS': {
          'LESS_THAN_5_HOURS': 2,
          '5-6_HOURS': 1,
          '7-8_HOURS': 0,
          'MORE_THAN_8_HOURS': 0
        },
        'MEDICATION_AND_SUBSTANCE_USE': {
          'YES': 2,
          'NO': 0
        },
      },
      section_7: {
        'SALT_INTAKE': {
          'I_DO_NOT_ADD_SALT_TO_MY_FOOD': 0,
          'LESS_THAN_1_SPOONFUL': 0,
          '1-2_SPOONFULS': 1,
          'MORE_THAN_2_SPOONFULS': 2
        },
        'SOCIAL_ECONOMIC_FACTORS':{
          'YES':0,
          'NO':1
        }
      },
      section_8: {
        'WATER_INTAKE': {
          'LESS_THAN_4_GLASSES': 1,
          '4-8_GLASSES': 0,
          'MORE_THAN_8_GLASSES': 0
        },
        'CAFFEINE_CONSUMPTION': {
          'NONE': 0,
          '1-2_CUPS_OF_COFFEE/TEA': 1,
          'MORE_THAN_2_CUPS_OF_COFFEE/TEA': 2
        }
        // 'MONITORING_FREQUENCY': {
        //   'NEVER': 2,
        //   'YEARLY': 1,
        //   'MONTHLY': 0,
        //   'WEEKLY': 0,
        //   'DAILY': 0
        // }
      },
      section_9: {
        'UNDERSTANDING_OF_HYPERTENSION': {
          'POOR': 1,
          'GOOD': 0,
          'EXCELLENT': 0
        }
      }
    
    }
  

  // Iterate through each section in the answers
  console.log(answers);
  for (let sectionKey in answers) {
    if (scoringRules.hasOwnProperty(sectionKey)) {
      let section = answers[sectionKey];
      let sectionRules = scoringRules[sectionKey];
      const answer1 = section.answer1 ? section.answer1.name.split(" ").join("_").toUpperCase() : null;
      const answer2 = section.answer2 ? section.answer2.name.split(" ").join("_").toUpperCase() : null;
console.log(`checking ${sectionKey}`)
      for (let ruleProp in sectionRules) {
        ruleProp = ruleProp.split(" ").join("_");

        section.questions.map((e, i) => {
          if (e.question.split(" ").join("_").toUpperCase() === ruleProp.toUpperCase()) {
            if (i == 0 && answer1 && sectionRules[ruleProp] && sectionRules[ruleProp].hasOwnProperty(answer1)) {
              score += (sectionRules[ruleProp][answer1] || 0);
              console.log(`found score: ${sectionRules[ruleProp][answer1]}`, answer1);
            }
            else{
console.log('testing answer 1',sectionRules[ruleProp], sectionRules[ruleProp]?.hasOwnProperty(answer1),answer1);
            }
            if (i == 1 && answer2 && sectionRules[ruleProp] && sectionRules[ruleProp].hasOwnProperty(answer2)) {
              score += (sectionRules[ruleProp][answer2] || 0);
              console.log(`found score: ${sectionRules[ruleProp][answer2]}`, answer2);
            }
            else{
              console.log('testing answer 2:',sectionRules[ruleProp], sectionRules[ruleProp]?.hasOwnProperty(answer2),answer2);
            }
          } else {
          //  console.log(e.question.split(" ").join("_").toUpperCase(), ruleProp.toUpperCase(), 'are not equal');
          }
        });
      }
    } else {
      console.error("answers has no own property:", sectionKey);
    }
    console.log("end checking...");
  }
  // Log the answers and calculated score
  console.log("Calculated Hypertension Risk Score:", score);
  // Return the calculated score
  return score;
};
// // Example structure for answers object
const exampleAnswers = {
    "section_0": {
      "title": "Personal Information",
      "questions": [
          {
              "question": "Age",
              "no": 1,
              "options": [
                  {
                      "type": "select",
                      "name": "Under 18"
                  },
                  {
                      "type": "select",
                      "name": "18-30"
                  },
                  {
                      "type": "select",
                      "name": "31-45"
                  },
                  {
                      "type": "select",
                      "name": "46-60"
                  },
                  {
                      "type": "select",
                      "name": "61+"
                  }
              ]
          },
          {
              "question": "Gender",
              "no": 2,
              "options": [
                  {
                      "type": "select",
                      "name": "Male"
                  },
                  {
                      "type": "select",
                      "name": "Female"
                  },
                  {
                      "type": "select",
                      "name": "Prefer not to Say"
                  },
                  {
                      "type": "select",
                      "name": " Other"
                  }
              ]
          }
      ],
      "answer1": {
          "type": "select",
          "name": "Under 18"
      },
      "answer2": {
          "type": "select",
          "name": "Male"
      }
  },
  "section_1": {
      "title": "Family and Genetic Background",
      "section": "section_2",
      "questions": [
          {
              "no": 3,
              "options": [
                  {
                      "name": "Yes",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "No"
                  }
              ],
              "question": "Family History of Hypertension"
          },
          {
              "options": [
                  {
                      "name": " African or Caribbean Descent",
                      "type": "select"
                  },
                  {
                      "name": " Asian Descent",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "Caucasian"
                  },
                  {
                      "type": "select",
                      "name": " Other"
                  }
              ],
              "subTitle": "(Certain ethnicities have a higher risk of hypertension)",
              "no": 4,
              "question": " Ethnic Background"
          }
      ],
      "answer1": {
          "name": "Yes",
          "type": "select"
      },
      "answer2": {
          "name": " African or Caribbean Descent",
          "type": "select"
      }
  },
  "section_2": {
      "title": "Family and Genetic Background",
      "section": "section_3",
      "questions": [
          {
              "no": 5,
              "question": " Family and Genetic Background",
              "options": [
                  {
                      "name": "Non-Smoker",
                      "type": "select"
                  },
                  {
                      "name": "Ex-Smoker",
                      "type": "select"
                  },
                  {
                      "name": "Current Smoker",
                      "type": "select"
                  },
                  {
                      "name": "If current smoker, how many cigarettes per day? (optional)",
                      "type": "input"
                  }
              ]
          },
          {
              "question": "Alcohol Consumption",
              "no": 6,
              "options": [
                  {
                      "type": "select",
                      "name": "I do not drink Alcohol"
                  },
                  {
                      "type": "select",
                      "name": "Occasionally ( Less than 2 times per week)"
                  },
                  {
                      "type": "select",
                      "name": "Regularly (2-4 times per week)"
                  },
                  {
                      "name": " Frequently (5+ times per week)",
                      "type": "select"
                  }
              ]
          }
      ],
      "answer1": {
          "name": "Non-Smoker",
          "type": "select"
      },
      "answer2": {
          "type": "select",
          "name": "I do not drink Alcohol"
      }
  },
  "section_3": {
      "title": "Family and Genetic Background        ",
      "section": "section_4",
      "questions": [
          {
              "question": " Physical Activity Level",
              "no": 7,
              "options": [
                  {
                      "type": "select",
                      "name": "Sedentary(Little or no Exercise)"
                  },
                  {
                      "type": "select",
                      "name": "Moderately Active (Exercise 1 day a week)"
                  },
                  {
                      "name": "Active (Exercise 2-3 days a week)",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "Very Active (Exercise 6-7 days a week)"
                  },
                  {
                      "name": "What types of physical activity do you engage in? __________ (optional)",
                      "type": "input"
                  }
              ]
          },
          {
              "subText": "How would you describe your diet?",
              "question": "Dietary Habits",
              "no": 8,
              "options": [
                  {
                      "type": "select",
                      "name": "High in fruits and Vegetables"
                  },
                  {
                      "name": "High in Processed or fatty Foods",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "Balanced"
                  },
                  {
                      "name": " I am not Sure",
                      "type": "select"
                  },
                  {
                      "type": "input",
                      "name": "How many servings of fruits and vegetables do you consume daily? _______ (optional)  "
                  }
              ]
          }
      ],
      "answer1": {
          "type": "select",
          "name": "Sedentary(Little or no Exercise)"
      },
      "answer2": {
          "name": " I am not Sure",
          "type": "select"
      }
  },
  "section_4": {
      "title": "Family and Genetic Background",
      "section": "section_5",
      "questions": [
          {
              "no": 9,
              "subText": "If you are unsure, enter your height (in Feet) and weight in Kilograms below:",
              "question": " Body Mass Index (BMI)",
              "options": [
                  {
                      "name": "Height (feet)",
                      "type": "input"
                  },
                  {
                      "type": "input",
                      "name": "Weight (kg)"
                  },
                  {
                      "type": "input",
                      "name": "BMI"
                  },
                  {
                      "name": "Normal weight (BMI 18.5–24.9)",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "Overweight (BMI 25–29.9)"
                  },
                  {
                      "type": "select",
                      "name": "Obesity (BMI 30 or higher)"
                  }
              ]
          },
          {
              "question": "Existing Health Conditions",
              "options": [
                  {
                      "name": "Diabetes ",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "High Cholesterol"
                  },
                  {
                      "name": " Kidney Disease",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "Heart Disease"
                  },
                  {
                      "type": "select",
                      "name": " Stroke"
                  },
                  {
                      "type": "select",
                      "name": "None of the Above"
                  }
              ],
              "no": 10,
              "subText": "(Select all that apply)"
          }
      ],
      "answer1": {
          "name": "Height (feet)",
          "type": "input"
      },
      "answer2": {
          "type": "select",
          "name": "High Cholesterol"
      }
  },
  "section_5": {
      "questions": [
          {
              "options": [
                  {
                      "name": "Normal (less than 120/80 mm Hg)",
                      "type": "select"
                  },
                  {
                      "name": "Elevated (120-129/<80 mm Hg)",
                      "type": "select"
                  },
                  {
                      "name": "Hypertension stage 1 (130-139/80-89 mm Hg)",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "Hypertension stage 2 (140 or higher/90 or higher mm Hg)"
                  },
                  {
                      "name": "Hypertension stage 2 (140 or higher/90 or higher mm Hg)",
                      "type": "select"
                  }
              ],
              "question": "Blood Pressure Reading:",
              "no": 11
          },
          {
              "no": 12,
              "options": [
                  {
                      "name": "Low",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "Moderate"
                  },
                  {
                      "type": "select",
                      "name": "High"
                  },
                  {
                      "type": "select",
                      "name": "Very High"
                  },
                  {
                      "name": "What are your primary sources of stress? __________ (optional)",
                      "type": "input"
                  }
              ],
              "question": "Stress Level"
          }
      ],
      "section": "section_6",
      "title": "Family and Genetic Background",
      "answer1": {
          "name": "Normal (less than 120/80 mm Hg)",
          "type": "select"
      },
      "answer2": {
          "type": "select",
          "name": "Moderate"
      }
  },
  "section_6": {
      "section": "section_7",
      "questions": [
          {
              "subText": "How many hours of sleep do you get on average per night?",
              "options": [
                  {
                      "type": "select",
                      "name": "Less than 5 Hours"
                  },
                  {
                      "name": "5-6 Hours",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "7-8 Hours"
                  },
                  {
                      "name": "More than 8 Hours",
                      "type": "select"
                  }
              ],
              "no": 13,
              "question": "Sleep Patterns"
          },
          {
              "options": [
                  {
                      "name": "Yes",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": " No"
                  },
                  {
                      "name": "If yes, please specify: __________ (optional)",
                      "type": "input"
                  }
              ],
              "subText": "Do you use any medications or substances that may affect your blood pressure?",
              "no": 14,
              "question": "Medication and Substance Use:"
          }
      ],
      "title": "Family and Genetic Background",
      "warning": "This includes not only illegal substances but also prescription medications that can affect blood pressure, over-the-counter medications, and herbal supplements).",
      "answer1": {
          "type": "select",
          "name": "Less than 5 Hours"
      },
      "answer2": {
          "type": "select",
          "name": " No"
      }
  },
  "section_7": {
      "questions": [
          {
              "options": [
                  {
                      "type": "select",
                      "name": "Yes"
                  },
                  {
                      "type": "select",
                      "name": "No"
                  },
                  {
                      "type": "input",
                      "name": "If yes, please specify: __________ (optional) "
                  }
              ],
              "subText": "Would you like to share any socioeconomic factors that affect your health?",
              "no": 15,
              "question": "Social-economic Factors"
          },
          {
              "no": 16,
              "question": "Salt Intake",
              "options": [
                  {
                      "name": "I do not add Salt to my Food",
                      "type": "select"
                  },
                  {
                      "name": "Less than 1 Spoonful",
                      "type": "select"
                  },
                  {
                      "name": "1-2 Spoonful",
                      "type": "select"
                  },
                  {
                      "name": "More than 2 Spoonful",
                      "type": "select"
                  }
              ]
          }
      ],
      "title": "Family and Genetic Background",
      "section": "section_8",
      "answer1": {
          "type": "select",
          "name": "No"
      },
      "answer2": {
          "name": "I do not add Salt to my Food",
          "type": "select"
      }
  },
  "section_8": {
      "questions": [
          {
              "subText": "How many glasses of water do you drink daily?",
              "options": [
                  {
                      "type": "select",
                      "name": "Less than 4 Glasses"
                  },
                  {
                      "type": "select",
                      "name": " 4-8 Glasses"
                  },
                  {
                      "type": "select",
                      "name": "More than 8 Glasses"
                  }
              ],
              "no": 17,
              "question": "Water Intake"
          },
          {
              "subText": "How much caffeine do you consume daily?",
              "question": "Caffeine Consumption",
              "options": [
                  {
                      "type": "select",
                      "name": "None                    "
                  },
                  {
                      "name": "1-2 Cups of Coffee/tea",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "More than 2 Cups of Coffee/Tea"
                  }
              ],
              "no": 18
          }
      ],
      "title": "Family and Genetic Background",
      "section": "section_9",
      "answer1": {
          "type": "select",
          "name": "Less than 4 Glasses"
      },
      "answer2": {
          "name": "1-2 Cups of Coffee/tea",
          "type": "select"
      }
  },
  "section_9": {
      "section": "section_10",
      "title": "Family and Genetic Background",
      "questions": [
          {
              "no": 19,
              "options": [
                  {
                      "name": "Never",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "Yearly"
                  },
                  {
                      "type": "select",
                      "name": "Monthly"
                  },
                  {
                      "name": "Weekly",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "daily"
                  }
              ],
              "question": "Monitoring Frequency",
              "subText": "How often do you monitor your blood pressure?"
          },
          {
              "no": 20,
              "subText": "How would you rate your understanding of the factors that affect blood pressure?",
              "options": [
                  {
                      "name": "Poor",
                      "type": "select"
                  },
                  {
                      "type": "select",
                      "name": "Good"
                  },
                  {
                      "name": "Excellent",
                      "type": "select"
                  }
              ],
              "question": "Understanding pf Hypertension"
          }
      ]
  }
}
 HypertensionRiskCalculator(exampleAnswers)