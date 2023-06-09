console.clear();

let ENTRIES = [{
    // start
    id: 'beginning',
    text: 'would you like to start the test?',
    options: [{
        text: 'Yes',
        goto: 'number1',
    }, {
        text: 'No',
        goto: 'non_programmer'
    }],
    start: true
}, {
    // number1
    id: 'number1',
    text: 'Do you prefer computer-related work?',
    options: [{
        text: 'Yes',
        goto: 'number2',
    }, {
        text: 'No',
        goto: 'non_programmer'
    }],
    start: true
}, {
    // number2
    id: 'number2',
    text: 'Are you interested in information security and protection from cyber attacks?',
    options: [{
        text: 'Yes',
        goto: 'CyberSecurity'
    }, {
        text: 'No',
        goto: 'number3'
    }]
}, {
    // number3
    id: 'number3',
    text: 'Are you interested in the creative process and working with multimedia?',
    options: [{
        text: 'Yes',
        goto: 'CreativeIndustry'
    }, {
        text: 'No',
        goto: 'number4'
    }
    ]
}, {
    // number4
    id: 'number4',
    text: 'Do you like working with data and analyzing it?',
    options: [{
        text: 'Yes',
        goto: 'DataAnalytics'
    }, {
        text: 'No',
        goto: 'number5'
    }]
}, {
    // number5
    id: 'number5',
    text: 'Would you like to teach in information technology?',
    options: [{
        text: 'Yes',
        goto: 'TeachingInIT'
    }, {
        text: 'No',
        goto: 'number6'
    }]
}, {
    // number6
    id: 'number6',
    text: 'Are you interested in artificial intelligence and robotics?',
    options: [{
        text: 'Yes',
        goto: 'AI-AndRobotics'
    }, {
        text: 'No',
        goto: 'number7'
    }]

}, {
    // number7
    id: 'number7',
    text: 'Do you like managing projects and teams?',
    options: [{
        text: 'Yes',
        goto: 'IT-Management'
    }, {
        text: 'No',
        goto: 'number8'
    }]
}, {
    // number8
    id: 'number8',
    text: 'Do you like to understand how different computer systems and networks work?',
    options: [{
        text: 'Yes',
        goto: 'CyberSecurity'
    }, {
        text: 'No',
        goto: 'number9'
    }]
}, {
    // number9
    id: 'number9',
    text: 'Do you prefer working with physical devices (for example, robotics) or with software solutions?',
    options: [{
        text: 'physical devices',
        goto: 'AI-AndRobotics'
    }, {
        text: 'software solutions',
        goto: 'number10'
    }]
}, {
    // number10
    id: 'number10',
    text: 'Are you interested in working with large amounts of data and using them to make decisions?',
    options: [{
        text: 'Yes',
        goto: 'DataAnalytics'
    }, {
        text: 'No',
        goto: 'number11'
    }]
}, {
    // number11
    id: 'number11',
    text: 'Do you prefer to develop new and innovative ideas?',
    options: [{
        text: 'Yes',
        goto: 'CreativeIndustry'
    }, {
        text: 'No',
        goto: 'number12'
    }]
}, {
    // number12
    id: 'number12',
    text: 'Would you like to work in the field of education and transfer knowledge about information technology to other people?',
    options: [{
        text: 'Yes',
        goto: 'TeachingInIT'
    }, {
        text: 'No',
        goto: 'number13'
    }]
}, {
    // number13
    id: 'number13',
    text: 'Are you interested in developing software for mobile devices?',
    options: [{
        text: 'Yes',
        goto: 'SoftwareDevelopment'
    }, {
        text: 'No',
        goto: 'number14'
    }]
}, {
    // number14
    id: 'number14',
    text: 'Are you attracted to process and resource management in information technology?',
    options: [{
        text: 'Yes',
        goto: 'SoftwareDevelopment'
    }, {
        text: 'No',
        goto: 'number15'
    }]
}, {
    // number15
    id: 'number15',
    text: 'Would you like to analyze and optimize business processes using information technology?',
    options: [{
        text: 'Yes',
        goto: 'DataAnalytics'
    }, {
        text: 'No',
        goto: 'non_programmer'
    }]
}, {
    // non_programmer
    id: 'non_programmer',
    text: 'you may not be able to become a programmer (but you can try)',
    gameOver: 'restart'

}, {
    // CyberSecurity
    id: 'CyberSecurity',
    text: 'the department of CyberSecurity may be suitable for you.',
    extra: [{
        text: 'Studies methods and technologies used to protect computer systems,networks and data from cyber threats. It includes vulnerability analysis, development of secure systems and incident response.'
    }],
    gameOver: 'restart'
}, {
    // Creative industry
    id: 'CreativeIndustry',
    text: 'the department of Creative Industry may be suitable for you.',
    extra: [{
        text: 'Based on the development of creative skills and entrepreneurial thinking in the context of various fields such as design, multimedia, advertising and entertainment. Focuses on creating innovative products and services.',

    }],
    gameOver: 'restart'
}, {
    // Software Development
    id: 'SoftwareDevelopment',
    text: 'the department of Software Development may be suitable for you.',
    extra: [{
        text: 'Teaches the process of creating high-quality software. It includes architecture development, programming, testing and project management.',
    }],
    gameOver: 'restart'
}, {
    // Data Analytics
    id: 'DataAnalytics',
    text: 'the department of Data Analytics may be suitable for you.',
    extra: [{
        text: 'Studies methods of collecting, analyzing and interpreting large amounts of data in order to obtain valuable information and make informed decisions. Includes statistics, machine learning, and data visualization.',
    }],
    gameOver: 'restart'
}, {
    // Teaching in information technology
    id: 'TeachingInIT',
    text: 'the department of Teaching in IT(information technology) may be suitable for you.',
    extra: [{
        text: 'Prepares students for the role of teachers and trainers in the field of information technology. It includes teaching methods, the development of teaching materials and the assessment of students.',
    }],
    gameOver: 'restart'
}, {
    // Artificial Intelligence and Robotics
    id: 'AI-AndRobotics',
    text: 'the department of Artificial Intelligence and Robotics may be suitable for you.',
    extra: [{
        text: ' Studies the development and application of artificial intelligence and robotics. It includes machine learning algorithms, computer vision, robotics and autonomous systems.',
    }],
    gameOver: 'restart'
}, {
    // Information Technology Management
    id: 'IT-Management',
    text: 'the department of IT-Management may be suitable for you.',
    extra: [{
        text: 'Focuses on information technology management in organizations. It includes strategic planning, project management, change management and ethics in the field of information technology.',
    }],
    gameOver: 'restart'
}
];


let Console = (function () {

    let ENTRY_DATA,
        currentEntryId, currentEntryData

    function _init(entryData) {
        ENTRY_DATA = {};
        currentEntryId = null;
        currentEntryData = {};

        let startEntryId = null;

        entryData.forEach(function (entry) {
            ENTRY_DATA[entry.id] = Object.create(entry);

            if (entry.start === true) {
                if (startEntryId !== null) {
                    console.error('More than one starting state defined:', startEntryId, entry.id);
                } else {
                    startEntryId = entry.id;
                }
            }

            if (entry.extra) {
                entry.extra.forEach(function (ext) {
                    if (ext.requires && (typeof ext.requires === 'string')) {
                        ext.requires = [ext.requires];
                    }
                });
            }


            if (entry.options) {
                entry.options.forEach(function (opt) {
                    if (!opt.goto) console.error('Entry', entry.id, ' has option without a goto: ', opt.text);
                    if (opt.requires && (typeof opt.requires === 'string')) {
                        opt.requires = [opt.requires];
                    }
                });
            }
        });

        if (startEntryId === null) console.error('No start entry found');
        _setEntry(startEntryId);
    }


    function _hasRequirements() {
        return true;
    }

    function _setEntry(id) {

        let data = ENTRY_DATA[id];
        currentEntryData = {
            id: data.id,
            text: data.text,
            extra: []
        };


        if (data.extra) {
            data.extra.forEach(function (ext) {
                if (_hasRequirements(ext)) currentEntryData.extra.push(ext.text);
            });
        }

        if (data.gameOver) currentEntryData.gameOver = data.gameOver;

        if (data.options) {
            currentEntryData.options = [];
            data.options.forEach(function (opt) {
                if (_hasRequirements(opt)) {
                    currentEntryData.options.push({
                        text: opt.text,
                        goto: opt.goto
                    });
                }
            });
        }
        return currentEntryData;
    }

    function startGame(data) {
        _init(data);
    }

    function getCurrentEntry() {
        if (currentEntryData === {}) console.error('error');
        return currentEntryData;
    }


    function doOption(idx) {
        let opt = currentEntryData.options[idx];
        let newEntryId = opt.goto;
        return _setEntry(newEntryId);
    }

    return {
        startGame: startGame,
        getCurrentEntry: getCurrentEntry,
        doOption: doOption
    };
})();


let Game = (function () {

    let DATA;

    let $el = $('#output');

    let endMsgs = {
        restart: 'restart test',
    };

    function render(isStart) {
        let d = Console.getCurrentEntry();

        $el.html('');
        if (isStart) $el.append('<p class="title">This test can determine which department you have a predisposition to. Please do not be upset if you have received a result that you do not like.</p>');
        $el.append('<p class="text">' + d.text + '</p>');

        d.extra.forEach(function (ext) {
            $el.append('<p>' + ext + '</p>');
        });

        let $opts = $('<ul/>');
        if (d.gameOver) {
            let $action = $('<li><a class="opt gameOver ' + d.gameOver + '" href="#">' +
                endMsgs[d.gameOver] + '</a></li>');
            $opts.append($action);
        }
        if (d.options) {
            d.options.forEach(function (opt, idx) {
                let $opt = $('<li><a class="opt action" href="#" data-opt="' + idx + '">' +
                    opt.text + '</a></li>');
                $opts.append($opt);
            });
        }
        $el.append($opts);


    }

    function init(entryData) {

        DATA = entryData;

        $(document).on('click', '.action', function (e) {
            e.preventDefault();
            let opt = $(this).attr('data-opt');
            console.log('do option', opt);
            if (Console.doOption(opt)) render();
        });

        // As above but for win/lose links.  Restart the game when used
        $(document).on('click', '.gameOver', function (e) {
            e.preventDefault();
            _start();
        });

        _start();
    }

    function _start() {
        Console.startGame(DATA);
        render(true);
    }

    return {
        init: init
    }

})();


Game.init(ENTRIES);