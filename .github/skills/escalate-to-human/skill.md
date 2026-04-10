# Skill: Escalate to Human Support

## Purpose

To provide a professional hand-off when the documentation is insufficient or the issue requires manual intervention (e.g., billing disputes, account deletions, or bugs).

## Triggers

- MCP server returns "No results found."
- The customer is expressing high frustration or using "Urgent/Emergency" keywords.
- The inquiry involves a request for a refund or sensitive data changes not supported via self-service.

## Instructions

1. **Acknowledge Gaps**: Explicitly state that the current documentation does not cover the specific edge case.
2. **Draft Internal Note**: Generate a 2-sentence summary of what the AI tried to find for the human agent who will take over.
3. **User Confirmation**: Inform the user that a ticket has been created in [Your Ticketing System, e.g., Zendesk/HubSpot] and provide a reference number if available.

## Constraints

- DO NOT promise a specific timeframe (e.g., "within 5 minutes") unless specified by the system clock/SLA rules.
- DO NOT guess the answer if this skill is triggered.
