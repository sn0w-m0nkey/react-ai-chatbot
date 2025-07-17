import { useState, useEffect } from 'react';
import { Assistant as GoogleAIAssistant } from "../../assistants/googlegenai";
import { Assistant as OpenAIAssistant } from "../../assistants/openai";
import { Assistant as DeepSeekAIAssistant } from "../../assistants/deepseekai";
import { Assistant as AnthropicAIAssistant } from "../../assistants/anthropicai";
import { Assistant as XAIAssistant } from "../../assistants/xai";
import styles from './Assistant.module.css'

const assistantMap = {
  googleai: GoogleAIAssistant,
  openai: OpenAIAssistant,
  deepseekai: DeepSeekAIAssistant,
  anthropicai: AnthropicAIAssistant,
  xai: XAIAssistant,
};

export function Assistant({ onAssistantChange }) {
  const [value, setValue] = useState('googleai:gemini-2.5-flash')

  function handleValueChange(event) {
    setValue(event.target.value)
  }

  useEffect(() => {
    const [assistant, model] = value.split(':')
    const AssistantClass = assistantMap[assistant]

    if (!AssistantClass) {
      throw new Error(`Unknown assistant: ${assistant} or model: ${model}`)
    }

    onAssistantChange(new AssistantClass(model))
  }, [value])

  return (
    <div className={styles.Assistant}>
      <span>Assistant:</span>
      <select defaultValue={value} onChange={handleValueChange}>
        <optgroup>
          <option value="googleai:gemini-2.5-flash">
            Gemini 2.5 Flash
          </option>
          <option value="googleai:gemini-2.0-flash">
            Gemini 2.0 Flash
          </option>
          <option value="googleai:gemini-1.5-flash">
            Gemini 1.5 Flash
          </option>
          <option value="googleai:gemini-2.5-flash-lite-preview-06-17">
            Gemini 2.5 Flash-Lite-Preview
          </option>
          <option value="googleai:gemini-2.0-flash-lite">
            Gemini 2.0 Flash-Lite
          </option>
        </optgroup>

        <optgroup label="Open AI">
          <option value="openai:gpt-4o-mini">GPT-4o mini</option>
          <option value="openai:chatgpt-4o-latest">ChatGPT-4o</option>
        </optgroup>

        <optgroup label="DeepSeek AI">
          <option value="deepseekai:deepseek-chat">DeepSeek-V3</option>
        </optgroup>

        <optgroup label="Anthropic AI">
          <option value="anthropicai:claude-3-5-haiku-latest">
            Claude 3.5 Haiku
          </option>
        </optgroup>

        <optgroup label="X AI">
          <option value="xai:grok-3-mini-latest">Grok 3 Mini</option>
        </optgroup>
      </select>
    </div>
  )
}
