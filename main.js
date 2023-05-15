function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XURz4HVyK/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults()
{
    console.log("Got results!")
}