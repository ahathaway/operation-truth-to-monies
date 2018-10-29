import uuid from 'uuid';
import moment from 'moment';

// api 
const port = '4000' // 8080
const api = `localhost:${port}`;
const url = `http://${api}/confessions`;


/* the test functions are ones that ping json-server, so they aren't actually using proper backend, just mock data */

export async function getConfessions()  {
    return await fetch('/api/confessions')
        .then(res => res.json())
        .then(res => res.confessions)
        /* .then(confessions => confessions.map(c => ({...c, date: new Date(c.date)}))) */
        /* .then(confessions => confessions.map(c => ({...c, date: new Date(c.date)}))) */
        .catch(err => console.log(err));
}

export async function getConfessionsTest() {
    console.log(url);
    return await fetch(url)
        .then(res => res.json())
        /* .then(res => res.confessions) */
        .catch(err => console.log(err));
}

export async function saveConfession() {
    return await fetch('/api/confessions')
        .then(res => res.json())
        .then(res => res.confessions)
        .catch(err => console.log(err));
}

export async function saveConfessionTest({title, date}) {
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          title,
          date,
          approvals: 0,
          disapprovals: 0,
          id: uuid(),
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        })
      })
      .then(response => response.json())
      .catch(err => console.log(err));
}

export async function updateConfessionTest({id, approvals, disapprovals}) {
    console.log(`${url}/${id}`);
    console.log(`Setting approvals, disapprovals: (${approvals}, ${disapprovals})`);
    return await fetch(`${url}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id,
            approvals,
            disapprovals,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        })
      })
      .then(response => response.json())
      .catch(err => console.log(err));
}

export function getTimeSinceDate(date) {
    let seconds = Math.floor(Math.abs(new Date().getTime() - new Date(date).getTime())/1000);
    if (seconds < 60) {
        if (seconds < 30) {
            return 'Just now';
        }
        return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`;
    }
    let minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
    }
    let hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
    }
    let days = Math.floor(hours / 24);
    if (days < 365) {
        return `${days} ${days > 1 ? 'days' : 'day'} ago`;
    }
    let years = Math.floor(days / 365);
    return `${years} ${years > 1 ? 'years' : 'year'} ago`
}