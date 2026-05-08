export interface AuditEvent {
  eventId: string;
  matterName: string;
  eventType: string;
  actorType: 'operator' | 'agent' | 'tool' | 'system';
  actorId?: string;
  occurredAt: string;
  payloadHash: string;
  metadata: Record<string, unknown>;
}
