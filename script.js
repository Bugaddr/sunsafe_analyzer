// Comprehensive UV Filter database with all possible names
const filterDatabase = [
    // PHYSICAL/MINERAL FILTERS
    {
        commonName: "Zinc Oxide",
        alternativeNames: ["zinc oxide", "zno"],
        type: "physical",
        safety: "safe",
        info: "Broad spectrum protection. Generally recognized as safe.",
        score: 10
    },
    {
        commonName: "Titanium Dioxide",
        alternativeNames: ["titanium dioxide", "tio2", "titania", "ci 77891"],
        type: "physical",
        safety: "safe",
        info: "Primarily UVB protection. Generally recognized as safe.",
        score: 9
    },

    // CHEMICAL FILTERS WITH CONCERNS
    {
        commonName: "Oxybenzone",
        alternativeNames: ["oxybenzone", "benzophenone-3", "bp-3", "bp3", "2-hydroxy-4-methoxybenzophenone"],
        type: "chemical",
        safety: "concern",
        info: "Hormone disruption concerns. Harmful to coral reefs.",
        score: 3
    },
    {
        commonName: "Octinoxate",
        alternativeNames: ["octinoxate", "octyl methoxycinnamate", "ethylhexyl methoxycinnamate", "parsol mox", "eusolex 2292", "escalol 557"],
        type: "chemical",
        safety: "concern",
        info: "Hormone disruption concerns. Harmful to coral reefs.",
        score: 4
    },
    {
        commonName: "Homosalate",
        alternativeNames: ["homosalate", "hms", "homomenthyl salicylate", "3,3,5-trimethylcyclohexyl salicylate"],
        type: "chemical",
        safety: "moderate",
        info: "Some hormone disruption concerns at high concentrations.",
        score: 5
    },
    {
        commonName: "Octisalate",
        alternativeNames: ["octisalate", "octyl salicylate", "ethylhexyl salicylate", "2-ethylhexyl salicylate"],
        type: "chemical",
        safety: "moderate",
        info: "Can cause skin irritation in some people.",
        score: 6
    },
    {
        commonName: "Octocrylene",
        alternativeNames: ["octocrylene", "2-ethylhexyl-2-cyano-3,3-diphenyl acrylate", "2-propenoic acid", "uvinul n539"],
        type: "chemical",
        safety: "moderate",
        info: "Potential skin irritation and environmental concerns.",
        score: 5
    },
    {
        commonName: "Avobenzone",
        alternativeNames: ["avobenzone", "butyl methoxydibenzoylmethane", "parsol 1789", "eusolex 9020"],
        type: "chemical",
        safety: "moderate",
        info: "Can break down in sunlight. May cause irritation.",
        score: 6
    },
    {
        commonName: "Ensulizole",
        alternativeNames: ["ensulizole", "phenylbenzimidazole sulfonic acid", "pbsa", "eusolex 232"],
        type: "chemical",
        safety: "moderate",
        info: "Primarily UVB protection. May generate free radicals.",
        score: 6
    },
    {
        commonName: "Dioxybenzone",
        alternativeNames: ["dioxybenzone", "benzophenone-8"],
        type: "chemical",
        safety: "concern",
        info: "Similar concerns to oxybenzone. Limited data available.",
        score: 4
    },
    {
        commonName: "Meradimate",
        alternativeNames: ["meradimate", "menthyl anthranilate", "methyl anthranilate"],
        type: "chemical",
        safety: "moderate",
        info: "Limited data on safety but generally better than oxybenzone.",
        score: 6
    },

    // NEWER CHEMICAL FILTERS (GENERALLY SAFER)
    {
        commonName: "Tinosorb S",
        alternativeNames: ["tinosorb s", "bemotrizinol", "bis-ethylhexyloxyphenol methoxyphenyl triazine", "anisotriazine"],
        type: "chemical",
        safety: "safe",
        info: "Modern photostable filter with good safety profile.",
        score: 8
    },
    {
        commonName: "Tinosorb M",
        alternativeNames: ["tinosorb m", "bisoctrizole", "methylene bis-benzotriazolyl tetramethylbutylphenol", "mbbt"],
        type: "chemical",
        safety: "safe",
        info: "Modern hybrid filter with good safety profile.",
        score: 8
    },
    {
        commonName: "Mexoryl SX",
        alternativeNames: ["mexoryl sx", "ecamsule", "terephthalylidene dicamphor sulfonic acid"],
        type: "chemical",
        safety: "safe",
        info: "Modern filter with good safety profile. Patented by L'Oréal.",
        score: 8
    },
    {
        commonName: "Mexoryl XL",
        alternativeNames: ["mexoryl xl", "drometrizole trisiloxane"],
        type: "chemical",
        safety: "safe",
        info: "Modern filter with good safety profile. Patented by L'Oréal.",
        score: 8
    },
    {
        commonName: "Uvinul A Plus",
        alternativeNames: ["uvinul a plus", "diethylamino hydroxybenzoyl hexyl benzoate", "dhhb", "uvasorb heb"],
        type: "chemical",
        safety: "safe",
        info: "Modern UVA filter with good safety profile.",
        score: 8
    },
    {
        commonName: "Uvinul T 150",
        alternativeNames: ["uvinul t 150", "ethylhexyl triazone", "octyl triazone", "ot"],
        type: "chemical",
        safety: "safe",
        info: "Modern UVB filter with good safety profile.",
        score: 8
    },
    {
        commonName: "Parsol SLX",
        alternativeNames: ["parsol slx", "polysilicone-15", "dimethicodiethylbenzalmalonate"],
        type: "chemical",
        safety: "safe",
        info: "Modern silicone-based UVB filter with good safety profile.",
        score: 8
    },
    {
        commonName: "Enzacamene",
        alternativeNames: ["enzacamene", "4-methylbenzylidene camphor", "4-mbc"],
        type: "chemical",
        safety: "moderate",
        info: "Some concerns about hormonal activity.",
        score: 5
    },
    {
        commonName: "Iscotrizinol",
        alternativeNames: ["iscotrizinol", "diethylhexyl butamido triazone", "uvasorb heb"],
        type: "chemical",
        safety: "safe",
        info: "Modern filter with good safety profile.",
        score: 8
    },
    {
        commonName: "Bisdisulizole Disodium",
        alternativeNames: ["bisdisulizole disodium", "disodium phenyl dibenzimidazole tetrasulfonate", "neo heliopan ap"],
        type: "chemical",
        safety: "safe",
        info: "Water-soluble filter with good safety profile.",
        score: 7
    }
];

// Initialize database
function initDB() {
    // Check if the browser supports IndexedDB
    if (!window.indexedDB) {
        console.error("Your browser doesn't support IndexedDB.");
        return false;
    }

    // Open (or create) the database
    const request = indexedDB.open("SunscreenDB", 1);

    request.onerror = function (event) {
        console.error("Database error: " + event.target.errorCode);
        return false;
    };

    request.onupgradeneeded = function (event) {
        const db = event.target.result;

        // Create an object store (table) for sunscreens
        const objectStore = db.createObjectStore("sunscreens", { keyPath: "id", autoIncrement: true });

        // Create indexes
        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("score", "score", { unique: false });
    };

    request.onsuccess = function (event) {
        console.log("Database initialized successfully");
        loadSavedSunscreens(); // Load saved sunscreens when DB is ready
    };

    return true;
}

// Save sunscreen to database
function saveSunscreen(sunscreen) {
    const request = indexedDB.open("SunscreenDB", 1);

    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(["sunscreens"], "readwrite");
        const objectStore = transaction.objectStore("sunscreens");

        const addRequest = objectStore.add(sunscreen);

        addRequest.onsuccess = function (event) {
            console.log("Sunscreen added successfully");
            loadSavedSunscreens(); // Refresh the list
        };

        addRequest.onerror = function (event) {
            console.error("Error adding sunscreen: " + event.target.errorCode);
        };
    };
}

// Load saved sunscreens from database
function loadSavedSunscreens() {
    const request = indexedDB.open("SunscreenDB", 1);

    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(["sunscreens"], "readonly");
        const objectStore = transaction.objectStore("sunscreens");
        const getAllRequest = objectStore.getAll();

        getAllRequest.onsuccess = function (event) {
            const sunscreens = event.target.result;

            // Sort sunscreens by score in descending order
            sunscreens.sort((a, b) => b.score - a.score);

            displaySavedSunscreens(sunscreens);
        };
    };
}

// Delete sunscreen from database
function deleteSunscreen(id) {
    const request = indexedDB.open("SunscreenDB", 1);

    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(["sunscreens"], "readwrite");
        const objectStore = transaction.objectStore("sunscreens");

        const deleteRequest = objectStore.delete(id);

        deleteRequest.onsuccess = function (event) {
            console.log("Sunscreen deleted successfully");
            loadSavedSunscreens(); // Refresh the list
        };
    };
}

// Load a sunscreen to the form
function loadSunscreen(id) {
    const request = indexedDB.open("SunscreenDB", 1);

    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(["sunscreens"], "readonly");
        const objectStore = transaction.objectStore("sunscreens");

        const getRequest = objectStore.get(id);

        getRequest.onsuccess = function (event) {
            const sunscreen = event.target.result;

            // Fill the form with the loaded data
            document.getElementById('sunscreen-name').value = sunscreen.name;
            document.getElementById('ingredients').value = sunscreen.ingredients;

            // Analyze the sunscreen again
            analyzeIngredients();

            // Scroll to the top of the form
            document.getElementById('sunscreen-name').scrollIntoView({ behavior: 'smooth' });
        };
    };
}

// Display saved sunscreens in the table
function displaySavedSunscreens(sunscreens) {
    const tableBody = document.getElementById('history-table-body');
    tableBody.innerHTML = "";

    if (sunscreens.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 4;
        cell.textContent = "No sunscreens saved yet";
        cell.className = "no-records";
        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }

    sunscreens.forEach(sunscreen => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = sunscreen.name;

        const scoreCell = document.createElement('td');

        // Create a badge for the score based on rating
        const scoreBadge = document.createElement('span');
        scoreBadge.textContent = sunscreen.score + "/10";
        scoreBadge.className = 'badge';

        if (sunscreen.score >= 8) {
            scoreBadge.classList.add('badge-safe');
        } else if (sunscreen.score >= 5) {
            scoreBadge.classList.add('badge-moderate');
        } else {
            scoreBadge.classList.add('badge-concern');
        }

        scoreCell.appendChild(scoreBadge);

        const summaryCell = document.createElement('td');
        summaryCell.textContent = sunscreen.summary;

        const actionsCell = document.createElement('td');

        const loadButton = document.createElement('button');
        loadButton.textContent = "Load";
        loadButton.className = "action-button";
        loadButton.onclick = function () {
            loadSunscreen(sunscreen.id);
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className = "action-button delete-button";
        deleteButton.onclick = function () {
            if (confirm("Are you sure you want to delete this sunscreen?")) {
                deleteSunscreen(sunscreen.id);
            }
        };

        actionsCell.appendChild(loadButton);
        actionsCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(scoreCell);
        row.appendChild(summaryCell);
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

// Helper function to normalize text for comparison
function normalizeText(text) {
    return text.toLowerCase()
        .replace(/[\-\s,()]/g, '') // Remove spaces, hyphens, commas, parentheses
        .replace(/\d+/g, ''); // Remove numbers
}

// Current analyzed sunscreen data
let currentAnalysis = null;

// Analyze ingredients and display results
function analyzeIngredients() {
    const inputText = document.getElementById('ingredients').value.toLowerCase();
    const sunscreenName = document.getElementById('sunscreen-name').value;

    // Reset current analysis
    currentAnalysis = {
        name: sunscreenName,
        ingredients: inputText,
        foundFilters: [],
        score: 0,
        summary: ""
    };

    // Set result name
    document.getElementById('result-name').textContent = sunscreenName || "Unnamed Sunscreen";

    // Find UV filters in the input
    const foundFilters = [];
    const alreadyFound = new Set(); // To prevent duplicates

    // For each filter in our database
    filterDatabase.forEach(filter => {
        // Check each alternative name
        filter.alternativeNames.forEach(name => {
            // Normalize both the name and the input text for better matching
            const normalizedName = normalizeText(name);
            const normalizedInput = normalizeText(inputText);

            // If the filter name is found in the input and we haven't already found this filter
            if (normalizedInput.includes(normalizedName) && !alreadyFound.has(filter.commonName)) {
                foundFilters.push(filter);
                alreadyFound.add(filter.commonName);
            }
        });
    });

    // Sort filters by score in descending order
    foundFilters.sort((a, b) => b.score - a.score);

    // Save found filters to current analysis
    currentAnalysis.foundFilters = foundFilters;

    // Display results
    const resultsDiv = document.getElementById('results');
    const filtersListDiv = document.getElementById('filters-list');
    const summaryDiv = document.getElementById('summary');
    const scoreDisplay = document.getElementById('safety-score');

    // Clear previous results
    filtersListDiv.innerHTML = "";
    summaryDiv.innerHTML = "";

    // Remove previous score classes
    scoreDisplay.classList.remove('score-safe', 'score-moderate', 'score-concern');

    if (foundFilters.length === 0) {
        scoreDisplay.textContent = "?";
        summaryDiv.textContent = "No recognized UV filters were found in the ingredients list. Please check if you've pasted the complete ingredients.";
        currentAnalysis.summary = "No recognized UV filters found";
        currentAnalysis.score = 0;
        resultsDiv.style.display = 'block';
        return;
    }

    // Calculate average score
    let totalScore = foundFilters.reduce((sum, filter) => sum + filter.score, 0);
    let averageScore = Math.round(totalScore / foundFilters.length);

    scoreDisplay.textContent = averageScore;
    currentAnalysis.score = averageScore;

    // Add appropriate class to score based on value
    if (averageScore >= 8) {
        scoreDisplay.classList.add('score-safe');
    } else if (averageScore >= 5) {
        scoreDisplay.classList.add('score-moderate');
    } else {
        scoreDisplay.classList.add('score-concern');
    }

    // Display filters
    foundFilters.forEach(filter => {
        const filterDiv = document.createElement('div');
        filterDiv.className = `filter ${filter.safety}`;

        const filterHeader = document.createElement('div');
        filterHeader.className = 'filter-header';

        const nameSpan = document.createElement('strong');
        nameSpan.textContent = filter.commonName;

        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'filter-score';
        scoreSpan.textContent = filter.score;

        filterHeader.appendChild(nameSpan);
        filterHeader.appendChild(scoreSpan);

        const typeSpan = document.createElement('div');
        typeSpan.textContent = `Type: ${filter.type.charAt(0).toUpperCase() + filter.type.slice(1)}`;

        const infoSpan = document.createElement('div');
        infoSpan.textContent = filter.info;

        const altNamesSpan = document.createElement('div');
        altNamesSpan.className = 'alternative-names';
        altNamesSpan.textContent = `Also known as: ${filter.alternativeNames.slice(1).join(', ')}`;

        filterDiv.appendChild(filterHeader);
        filterDiv.appendChild(typeSpan);
        filterDiv.appendChild(infoSpan);
        filterDiv.appendChild(altNamesSpan);

        filtersListDiv.appendChild(filterDiv);
    });

    // Create summary
    let summary = "";
    const hasPhysical = foundFilters.some(f => f.type === "physical");
    const hasChemical = foundFilters.some(f => f.type === "chemical");
    const hasConcernFilter = foundFilters.some(f => f.safety === "concern");

    if (hasPhysical && !hasChemical) {
        summary = "This sunscreen uses only mineral/physical filters, which are generally considered the safest option for both humans and the environment.";
    } else if (!hasPhysical && hasChemical) {
        summary = "This sunscreen uses only chemical filters. ";
        if (hasConcernFilter) {
            summary += "Some of these filters have potential safety concerns.";
        } else {
            summary += "The chemical filters used appear to be among the safer options.";
        }
    } else if (hasPhysical && hasChemical) {
        summary = "This sunscreen uses a combination of mineral and chemical filters. ";
        if (hasConcernFilter) {
            summary += "Some of the chemical filters used have potential safety concerns.";
        } else {
            summary += "The combination provides broad-spectrum protection with relatively safer ingredients.";
        }
    }

    // Add recommendations based on score
    if (averageScore >= 8) {
        summary += " Overall, this appears to be a sunscreen with safer ingredients.";
    } else if (averageScore >= 5) {
        summary += " This sunscreen has a moderate safety profile. Consider alternatives if you have sensitive skin or environmental concerns.";
    } else {
        summary += " This sunscreen contains ingredients that may be concerning. Consider looking for alternatives with mineral filters or newer chemical filters.";
    }

    summaryDiv.textContent = summary;
    currentAnalysis.summary = summary;

    // Show results
    resultsDiv.style.display = 'block';

    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Initialize database
    initDB();

    // Check filters button
    document.getElementById('check-button').addEventListener('click', function () {
        analyzeIngredients();
    });

    // Clear button
    document.getElementById('clear-button').addEventListener('click', function () {
        document.getElementById('sunscreen-name').value = "";
        document.getElementById('ingredients').value = "";
        document.getElementById('results').style.display = 'none';
    });

    // Save button
    document.getElementById('save-button').addEventListener('click', function () {
        if (!currentAnalysis) {
            alert("Please analyze a sunscreen first");
            return;
        }

        if (!currentAnalysis.name) {
            const name = prompt("Please enter a name for this sunscreen:");
            if (!name) return;
            currentAnalysis.name = name;
            document.getElementById('result-name').textContent = name;
        }

        // Save to database
        saveSunscreen(currentAnalysis);

        // Create notification element
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.padding = '15px 20px';
        notification.style.backgroundColor = '#27ae60';
        notification.style.color = 'white';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1000';
        notification.style.transition = 'opacity 0.5s';
        notification.textContent = "✓ Sunscreen saved successfully!";

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => document.body.removeChild(notification), 500);
        }, 3000);
    });

    // Add enter key functionality for ingredients field
    document.getElementById('ingredients').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            analyzeIngredients();
        }
    });
});
