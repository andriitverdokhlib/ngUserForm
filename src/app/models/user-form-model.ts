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
    };
    readonly questionArray: IQuestionForm[] 
}

interface IQuestionForm {
    readonly question: string;
    readonly type: string;
    readonly questionIsRequired: boolean;
    readonly answer: {
        readonly answerOption: string;
        readonly selectComment: boolean;
        readonly comment: string;
    }
}