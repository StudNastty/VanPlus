/*
    Copyright (C) 2022 Alexander Emanuelsson (alexemanuelol)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

    https://github.com/alexemanuelol/rustPlusPlus

*/

const SmartSwitchGroupHandler = require('./smartSwitchGroupHandler.js');
const SmartSwitchHandler = require('./smartSwitchHandler.js');

module.exports = {
    inGameCommandHandler: async function (rustplus, client, message) {
        const command = message.broadcast.teamMessage.message.message;
        const callerSteamId = message.broadcast.teamMessage.message.steamId.toString();
        const callerName = message.broadcast.teamMessage.message.name;
        const commandLowerCase = message.broadcast.teamMessage.message.message.toLowerCase();
        const prefix = rustplus.generalSettings.prefix;
        const guildId = rustplus.guildId;


        if (!rustplus.isOperational) {
            return false;
        }
        else if (!rustplus.generalSettings.inGameCommandsEnabled) {
            return false;
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxAfk')}`) {
            rustplus.printCommandOutput(rustplus.getCommandAfk());
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxAlive')}`)) {
            rustplus.printCommandOutput(rustplus.getCommandAlive(command));
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxBradley')}`) {
            rustplus.printCommandOutput(rustplus.getCommandBradley());
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxCargo')}`) {
            rustplus.printCommandOutput(rustplus.getCommandCargo());
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxChinook')}`) {
            rustplus.printCommandOutput(rustplus.getCommandChinook());
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxConnection')} `) ||
            commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxConnections')}`)) {
            rustplus.printCommandOutput(rustplus.getCommandConnection(command));
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxCrate')}`) {
            rustplus.printCommandOutput(rustplus.getCommandCrate());
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxDeath')} `) ||
            commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxDeaths')}`)) {
            rustplus.printCommandOutput(await rustplus.getCommandDeath(command, callerSteamId));
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxHeli')}`) {
            rustplus.printCommandOutput(rustplus.getCommandHeli());
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxLarge')}`) {
            rustplus.printCommandOutput(rustplus.getCommandLarge());
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxLeader')}`)) {
            rustplus.printCommandOutput(await rustplus.getCommandLeader(command, callerSteamId));
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxMarker')} `) ||
            commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxMarkers')}`) {
            rustplus.printCommandOutput(await rustplus.getCommandMarker(command, callerSteamId));
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxMarket')} `)) {
            rustplus.printCommandOutput(rustplus.getCommandMarket(command));
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxMute')}`) {
            rustplus.printCommandOutput(rustplus.getCommandMute());
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxNote')} `) ||
            commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxNotes')}`) {
            rustplus.printCommandOutput(rustplus.getCommandNote(command));
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxOffline')}`) {
            rustplus.printCommandOutput(rustplus.getCommandOffline());
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxOnline')}`) {
            rustplus.printCommandOutput(rustplus.getCommandOnline());
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxPlayer')}`)) {
            rustplus.printCommandOutput(rustplus.getCommandPlayer(command));
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxPop')}`) {
            rustplus.printCommandOutput(rustplus.getCommandPop());
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxProx')}`)) {
            rustplus.printCommandOutput(await rustplus.getCommandProx(command, callerSteamId));
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxSend')} `)) {
            rustplus.printCommandOutput(await rustplus.getCommandSend(command, callerName));
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxSmall')}`) {
            rustplus.printCommandOutput(rustplus.getCommandSmall());
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxTime')}`) {
            rustplus.printCommandOutput(rustplus.getCommandTime());
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxTimer')} `) ||
            commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxTimers')}`) {
            rustplus.printCommandOutput(rustplus.getCommandTimer(command));
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxTranslateTo')} `)) {
            rustplus.printCommandOutput(await rustplus.getCommandTranslateTo(command));
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxTranslateFromTo')} `)) {
            rustplus.printCommandOutput(await rustplus.getCommandTranslateFromTo(command));
        }
        else if (commandLowerCase.startsWith(`${prefix}${client.intlGet(guildId, 'commandSyntaxTTS')} `)) {
            rustplus.printCommandOutput(await rustplus.getCommandTTS(command, callerName));
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxUnmute')}`) {
            rustplus.printCommandOutput(rustplus.getCommandUnmute());
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxUpkeep')}`) {
            rustplus.printCommandOutput(rustplus.getCommandUpkeep());
        }
        else if (commandLowerCase === `${prefix}${client.intlGet(guildId, 'commandSyntaxWipe')}`) {
            rustplus.printCommandOutput(rustplus.getCommandWipe());
        }
        else {
            /* Maybe a custom command? */

            if (await SmartSwitchHandler.smartSwitchCommandHandler(rustplus, client, command)) {
                return true;
            }

            if (await SmartSwitchGroupHandler.smartSwitchGroupCommandHandler(rustplus, client, command)) {
                return true;
            }

            return false;
        }

        return true;
    },
};
