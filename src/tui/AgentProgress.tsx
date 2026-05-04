import React from 'react';
import { Box, Text } from 'ink';

export interface AgentEvent {
  type: 'turn' | 'tool' | 'message' | 'error' | 'done';
  message: string;
  timestamp: string;
  data?: Record<string, unknown>;
}

export interface AgentProgressProps {
  events: AgentEvent[];
  running: boolean;
  currentTurn?: number;
  maxTurns?: number;
}

export function AgentProgress({ events, running, currentTurn, maxTurns }: AgentProgressProps) {
  const recentEvents = events.slice(-10);

  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text bold color="cyan">
          Agent Progress
        </Text>
        {running && (
          <Text color="yellow">
            {' '}
            — Running turn {currentTurn ?? '?'}/{maxTurns ?? '?'}
          </Text>
        )}
        {!running && events.length > 0 && (
          <Text color="green"> — Complete</Text>
        )}
      </Box>
      {recentEvents.map((event, i) => {
        const color = 
          event.type === 'error' ? 'red' :
          event.type === 'tool' ? 'blue' :
          event.type === 'done' ? 'green' :
          event.type === 'turn' ? 'yellow' : 'white';
        return (
          <Box key={i}>
            <Text color={color}>
              [{event.type}] {event.message}
            </Text>
          </Box>
        );
      })}
      {events.length === 0 && (
        <Box>
          <Text dimColor>Waiting for agent to start...</Text>
        </Box>
      )}
    </Box>
  );
}
