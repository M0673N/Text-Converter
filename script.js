const engToBgPhoneticMap = {
    'a': 'а', 'A': 'А',
    'b': 'б', 'B': 'Б',
    'c': 'ц', 'C': 'Ц',
    'd': 'д', 'D': 'Д',
    'e': 'е', 'E': 'Е',
    'f': 'ф', 'F': 'Ф',
    'g': 'г', 'G': 'Г',
    'h': 'х', 'H': 'Х',
    'i': 'и', 'I': 'И',
    'j': 'й', 'J': 'Й',
    'k': 'к', 'K': 'К',
    'l': 'л', 'L': 'Л',
    'm': 'м', 'M': 'М',
    'n': 'н', 'N': 'Н',
    'o': 'о', 'O': 'О',
    'p': 'п', 'P': 'П',
    'q': 'я', 'Q': 'Я',
    'r': 'р', 'R': 'Р',
    's': 'с', 'S': 'С',
    't': 'т', 'T': 'Т',
    "u": "у", "U": "У",
    "v": "ж", "V": "Ж",
    "w": "в", "W": "В",
    "x": "ь", "X": "ѝ",
    "y": "ъ", "Y": "Ъ",
    "z": "з", "Z": "З",
    "\\": "ю", "|": "Ю",
    "[": "ш", "{": "Ш",
    "]": "щ", "}": "Щ",
    "`": "ч", "~": "Ч",
};

const engToBgTypewriterMap = {
    'a': 'ь', 'A': 'Ь',
    'b': 'ф', 'B': 'Ф',
    'c': 'ъ', 'C': 'Ъ',
    'd': 'а', 'D': 'А',
    'e': 'е', 'E': 'Е',
    'f': 'о', 'F': 'О',
    'g': 'ж', 'G': 'Ж',
    'h': 'г', 'H': 'Г',
    'i': 'с', 'I': 'С',
    'j': 'т', 'J': 'Т',
    'k': 'н', 'K': 'Н',
    'l': 'в', 'L': 'В',
    'm': 'п', 'M': 'П',
    'n': 'х', 'N': 'Х',
    'o': 'д', 'O': 'Д',
    'p': 'з', 'P': 'З',
    'q': ',', 'Q': 'ы',
    'r': 'и', 'R': 'И',
    's': 'я', 'S': 'Я',
    't': 'ш', 'T': 'Ш',
    "u": "к", "U": "К",
    "v": "э", "V": "Э",
    "w": "у", "W": "У",
    "x": "й", "X": "Й",
    "y": "щ", "Y": "Щ",
    "z": "ю", "Z": "Ю",
    ",": "р", "<": "Р",
    ".": "л", ">": "Л",
    "/": "б", "?": "Б",
    ";": "м", ":": "М",
    "'": "ч", "\"": "Ч",
    "[": "ц", "{": "Ц",
    "]": ";", "}": "§",
    "\\": "(", "|": ")",
};

const bgToEngPhoneticMap = Object.fromEntries(
    Object.entries(engToBgPhoneticMap).map(([key, value]) => [value, key])
);

const bgToEngTypewriterMap = Object.fromEntries(
    Object.entries(engToBgTypewriterMap).map(([key, value]) => [value, key])
);

document.getElementById('convertButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const conversionType = document.getElementById('conversionType').value;
    let outputText = '';

    if (conversionType === "bgp-to-eng") {
        outputText = inputText.split('').map(char => bgToEngPhoneticMap[char] || char).join('');
    } else if (conversionType === "eng-to-bgp") {
        outputText = inputText.split('').map(char => engToBgPhoneticMap[char] || char).join('');
    } else if (conversionType === "bgt-to-en") {
        outputText = inputText.split('').map(char => bgToEngTypewriterMap[char] || char).join('');
    } else {
        outputText = inputText.split('').map(char => engToBgTypewriterMap[char] || char).join('');
    }

    document.getElementById('outputText').value = outputText;
});

let isTranslated = false;

document.getElementById('translateButton').addEventListener('click', () => {
    if (isTranslated) {
        translateAppToEnglish();
    } else {
        translateAppToBulgarian();
    }
    isTranslated = !isTranslated;
});

function translateAppToBulgarian() {
    document.getElementById('appTitle').innerText = 'Текстов Конвертор';
    document.getElementById('inputText').placeholder = 'Поставете текста тук...';
    document.getElementById('outputText').placeholder = 'Конвертираният текст ще се появи тук...';
    document.getElementById('convertButton').innerText = 'Конвертиране';
    document.getElementById('translateButton').innerText = 'EN';
}

function translateAppToEnglish() {
    document.getElementById('appTitle').innerText = 'Text Converter';
    document.getElementById('inputText').placeholder = 'Paste text here...';
    document.getElementById('outputText').placeholder = 'Converted text will appear here...';
    document.getElementById('convertButton').innerText = 'Convert';
    document.getElementById('translateButton').innerText = 'BG';
}