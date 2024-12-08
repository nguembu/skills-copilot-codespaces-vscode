function skillsMember(){
    return{
        restrict : 'E',
        templateUrl : 'modules/skills/views/member.html',
        controller: 'SkillsMerberController',
        controlerAs: 'V3',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}