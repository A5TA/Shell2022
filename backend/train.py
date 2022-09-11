import pandas as pd
import pickle
from sklearn.ensemble import RandomForestClassifier


def getTrainingData():
    df = pd.read_excel("./data/Diseases.xlsx")
    disease_to_id = {d:idx for idx, d in enumerate(df["Disease"])}

    df = pd.read_excel("./data/Symptoms.xlsx")
    symptom_to_id = {d:idx for idx, d in enumerate(df["Symptom"])}

    print("Num Diseases: {}".format(len(disease_to_id)))
    print("Num Symptoms: {}".format(len(symptom_to_id)))

    df = pd.read_csv("./data/dataset.csv")

    Y = []
    X = []
    for example in df.iterrows():
        d = example[1][0]
        disease_id = disease_to_id[d.strip()]
        Y.append(disease_id)
        symps = [0] * len(symptom_to_id)
        for symp in example[1][1:]:
            if not pd.isna(symp):
                symp_id = symptom_to_id[symp.strip().replace(" ", "")]
                symps[symp_id] = 1
        X.append(symps)

    return X, Y


def trainRandomForest():
    X, Y = getTrainingData()
    print("Num Training Examples: {}".format(len(X)))

    rf_model = RandomForestClassifier(max_depth=6, random_state=0)
    rf_model.fit(X, Y)

    filename = "./model/rf_model.pkl"
    pickle.dump(rf_model, open(filename, 'wb'))

    print("Training is Success! \nRandom forest model saved to {}".format(filename))


if __name__ == "__main__":
    trainRandomForest()