import low from 'lowlight'
import rehype from 'rehype'

// export const highlighter = json => {
//    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
//       let cls = 'number'
//       if (/^"/.test(match)) {
//          if (/:$/.test(match)) {
//             cls = 'key'
//          } else {
//             cls = 'string'
//          }
//       } else if (/true|false/.test(match)) {
//          cls = 'boolean'
//       } else if (/null/.test(match)) {
//          cls = 'null'
//       }
//
//       // match URLs
//       match = match.replace(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/gi, url => `<a target="_blank" href="//${ url }">${ url }</a>`)
//
//       return '<span class="' + cls + '">' + match + '</span>'
//    })
// }
//
// export const prettify = json => json
                                 // .replace(/\s."/g, '  ')
                                 // .replace(/":/g, ':')

const highlighter = string => {
   const element = low.highlight('js', string).value
   return rehype().stringify({ type: 'root', children: element }).toString()
}

export default highlighter
