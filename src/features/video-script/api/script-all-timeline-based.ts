import { generateScriptDefinition } from './script-definition'
import {
  generateDerivatives,
  getDerivativeItemDesc,
} from './script-derivatives'
import { generateScriptEnding } from './script-ending'
import { generateEventExtend } from './script-event-extend'
import { generateExtend } from './script-extend'
import { generateScriptHistory, getHistoryItemDesc } from './script-history'
import { generateScriptHook } from './script-hook'
import { generateOutlooks } from './script-outlook'
import { generateScriptQuotes, getQuoteItemBrief } from './script-quotes'

export async function generateTechScript(channel: string, topic: string) {
  const scripts: string[] = []

  // Hook
  const hook = await generateScriptHook(topic)
  scripts.push(hook)

  // Quote
  const quotes = await generateScriptQuotes(topic)
  scripts.push(getQuoteItemBrief(quotes[0]))
  scripts.push(getQuoteItemBrief(quotes[1]))

  // Definition
  const definition = await generateScriptDefinition(topic, 500)
  scripts.push(definition)

  // Timeline
  const events = await generateScriptHistory(topic)
  for (const event of events) {
    scripts.push(
      await generateEventExtend(
        getHistoryItemDesc(event),
        topic,
        Math.random() > 0.5 ? 200 : 500, //random paragraph length
      ),
    )
  }

  // Derivatives: books or movies
  const derivatives = await generateDerivatives(topic)
  const [d1, d2, d3, ...rest] = derivatives
  scripts.push(await generateExtend(getDerivativeItemDesc(d1), topic, 300))

  const otherDerivatives = [d2, d3]
    .map((d) => getDerivativeItemDesc(d))
    .join('\n')
  scripts.push(await generateExtend(otherDerivatives, topic, 200))

  const outlook = await generateOutlooks(topic)
  scripts.push(outlook)

  // Ending
  const ending = await generateScriptEnding(topic, channel)
  scripts.push(ending)

  const output = scripts.join('\n\n').split(/[。?]/).join('。\n')
  return output
}
