
console.log('before');

// getUser(1, (user) => {
//     getRepositories( (repos) => {
//         getCommits( (commits) => {
//             console.log(user.gitHubUsername, repos, commits)
//         })
//     })
// })


console.log('after');


getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos))
    .then(commits => console.log(commits))
    .catch(err => console.log(err.message));


function getUser(id) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Reading from a database...')
            resolve({ id: id, gitHubUsername: 'MD' })
        }, 2000)
    })
}

function getRepositories() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Reading from github repository...')
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000)
    })
}

function getCommits() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Reading from commits')
            resolve(['commit1', 'commit2', 'commit3'])
        }, 2000)
    })
}