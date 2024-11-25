let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let wrapper = document.getElementsByClassName('wrapper')[0];

for (const item of coursesArray) {
    let wrap= document.createElement('div')
    wrapper.append(wrap)

    let divTitle = document.createElement("div")
    divTitle.classList.add('divTitle')
    divTitle.innerText = item.title;

    let monthHours = document.createElement('div')
    monthHours.classList.add('monthHours')

    let month = document.createElement('div')
    month.classList.add('month')
    month.innerText = item.monthDuration

    let hours = document.createElement('div')
    hours.classList.add('hours')
    hours.innerText = item.hourDuration

    monthHours.append(month, hours)
    wrap.append(divTitle, monthHours)

    for (const key in item) {

        if (typeof item[key] === "object") {
            let ul = document.createElement('ul');
            wrap.append(ul);
            for (const i of item[key]) {
                let li = document.createElement('li');
                li.innerText = i;
                ul.append(li);
            }

        }
    }
}
