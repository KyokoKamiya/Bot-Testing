function getRoleObject(guildObject, roleName) {
    let role = guildObject.roles.cache.find((role) => role.name === roleName);
    return role;
}

exports.getRoleObject = getRoleObject;
