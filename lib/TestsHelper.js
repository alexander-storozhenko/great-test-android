export const n2nColorMapToAnswers = (map) => {

    let answers = {}

    Object.entries(map['up']).forEach((item1) => {
        Object.entries(map['down']).forEach((item2) => {
            if(item1[1] && item1[1] === item2[1]) {
                answers[item1[0]] = item2[0]
            }
        })

    })

    return answers
}

export const anySelectedAnswer = (answers) => Object.values(answers).filter(value => value)
