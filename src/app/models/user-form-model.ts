export interface IUserForm {
    readonly bio: string;
    readonly services: {
        readonly software: boolean;
        readonly customerSupport: boolean;
        readonly other: {
            readonly selected: boolean;
            readonly text: string;
        };
    };
    readonly additionalOptions: {
        readonly other: boolean;
        readonly questionIsRequired: boolean;
    };
    readonly question: {
        readonly text: string;
        readonly type: string;
    };
    readonly answer: [{
        readonly answerOption: string;
        readonly selectComment: string;
        readonly comment: string;
    }]
}