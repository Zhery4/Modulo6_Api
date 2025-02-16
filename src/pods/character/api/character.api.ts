import { getRequests, putRequests } from "#core/api";
import { CharacterEntityApi } from "./character.api-model";

export const getCharacterDetails = async (characterId: string): Promise<CharacterEntityApi> => {
    return getRequests(`character/${characterId}`);

};

export const editCharacter = async (characterId: string, character: CharacterEntityApi): Promise<void> => {
    return putRequests(`character/${characterId}`, character);
};