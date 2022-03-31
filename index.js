function getValue(name){
    return document.getElementById(name).value
  }

function validateSubmission(){
 
 const id = getValue('id')
 const name = getValue('name')
 const nname = getValue('nick-name')
 const pronoun = getValue('pronoun')
 const bio = getValue('bio') 
 const description = getValue('description')
 const country = getValue('country') 
 const avatar = getValue('avatar') 
 const badges = getValue('badges') 
 const status = getValue('status') 
 const projects = getValue('projects') 
 const mentors = getValue('mentors') 
 const mentees = getValue('mentees') 
 const events = getValue('events') 
 const gitlab = getValue('gitlab') 
 const twitter = getValue('twitter') 
 const blog = getValue('blog') 
 const matrix = getValue('matrix') 
 const instagram = getValue('instagram') 
 const dev = getValue('dev') 
 const github = getValue('github') 
 const mastodon = getValue('mastodon') 
 const keybase = getValue('keybase') 

 //generate a filename
 const filename = id.replace(/\s/g, '-') + ".yml"

  //Format tags 
  const formattedBadges = '\n' + '  ' + '- ' + badges.replace(/\s/g, '\n  - ')

  const formattedProjects = '\n' + '  ' + '- ' + projects.replace(/\s/g, '\n  - ')

  const formattedEvents = '\n' + '  ' + '- ' + events.replace(/\s/g, '\n  - ')

  const formattedMentor = '\n' + '  ' + '- ' + mentors.replace(/\s/g, '\n  - ')

  const formattedMentee = '\n' + '  ' + '- ' + mentees.replace(/\s/g, '\n  - ')

  //Generate a string mimicing the file structure
  //Indentation is important here
  /*
id: member-template #same as file name
name: John Smith
nick: JSmith #optional
title: Something
pronoun: he #optional
country: ✨ #optional (or favourite emoji)
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
avatar: https://my-avatar-url.png #prefers minimum image of size 250*250
badges: #refer: badges.json file for badge ids
  - contributor
  - maintainer
  - mentor
  - mentee
active: true
openToWork: true #optional
projects: #refer: projects.json for project id
  - some-project
events: #refer: events.json for conference ids
  - guadec-2021
  - gnsummit-2015
mentor: #GSoC/Outreachy mentors
  - gsoc-2021 
  - gsoc-2020 
  - outreachy-2019
mentee: #GSoC/Outreachy students
  - gsoc-2021 
  - gsoc-2020 
  - outreachy-2019
social:
  blog: https://my.site
  twitter: handle
  gitlab: handle
  matrix: handle #don't include @
  instagram: handle
  dev_to: handle
  github: handle
  mastodon: handle #don't include @
  keybase: handle
*/
  let fileText = `---
id: ${id}
name: ${name}
nick: ${nname}
title: ${bio}
pronoun: ${pronoun}
country: ${country}
description: ${description}
avatar: ${avatar}
badges: ${formattedBadges}
active: ${status}
projects: ${formattedProjects}
events: ${formattedEvents}
mentor: ${formattedMentor}
mentee: ${formattedMentee}
social:
  blog: ${blog}
  twitter: ${twitter}
  gitlab: ${gitlab}
  matrix: ${matrix}
  instagram: ${instagram}
  dev_to: ${dev}
  github: ${github}
  mastodon: ${mastodon}
  keybase: ${keybase}
---
# Delete this line & blank fields!!.`

//Encode string to URI format
const encodedFileText = encodeURIComponent(fileText)

//Generate a github link with query parameter
const gitlabQueryLink = "https://gitlab.gnome.org/Teams/Engagement/websites/people-of-gnome/-/forks/new/master/_data%2Fmembers?file=" + encodedFileText +"&file_name=" + filename
  
//Open in a new tab
window.open(gitlabQueryLink) 

}
