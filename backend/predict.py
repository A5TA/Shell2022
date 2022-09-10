import pandas as pd
import pickle


def whatDoIHave(symptoms, rf_model):
    if not symptoms:
        return None

    df = pd.read_excel("./data/Diseases.xlsx")
    id_to_disease = {idx:d for idx, d in enumerate(df["Disease"])}

    df = pd.read_excel("./data/Symptoms.xlsx")
    symptom_to_id = {d:idx for idx, d in enumerate(df["Symptom"])}
    
    symps = [0] * len(symptom_to_id)
    for symp in symptoms:
        symps[symptom_to_id[symp]] = 1
    return id_to_disease[rf_model.predict([symps])[0]]


if __name__ == "__main__":
    filename = "./model/rf_model.pkl"
    rf_model = pickle.load(open(filename, 'rb'))
    symps = ["weight_gain", "nausea", "yellowing_of_eyes", "unsteadiness"]
    disease = whatDoIHave(symps, rf_model)
    print(disease)