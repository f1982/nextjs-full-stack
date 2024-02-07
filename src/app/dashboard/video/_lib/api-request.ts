import { sleep } from '@/app/_lib/utils'

export async function getTopics() {
  sleep(3000)
  return [
    'Luke Skywalker (Star Wars)',
    'Indiana Jones (Indiana Jones series)',
    'Dorothy Gale (The Wizard of Oz)',
    'James Bond (James Bond series)',
    'Ellen Ripley (Alien)',
    'Hannibal Lecter (The Silence of the Lambs)',
    'Forrest Gump (Forrest Gump)',
    'Marty McFly (Back to the Future)',
    'Jack Sparrow (Pirates of the Caribbean)',
    'Neo (The Matrix)'
  ]
}
